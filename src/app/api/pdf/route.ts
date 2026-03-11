import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import jsPDF from "jspdf";

// Sanitize filename for Content-Disposition header
function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s\-_]/g, "").trim() || "documento";
}

// Transliterate Portuguese characters for jsPDF (which only supports Windows-1252)
function transliterate(text: string): string {
  const map: Record<string, string> = {
    "á": "a", "à": "a", "â": "a", "ã": "a", "ä": "a",
    "é": "e", "è": "e", "ê": "e", "ë": "e",
    "í": "i", "ì": "i", "î": "i", "ï": "i",
    "ó": "o", "ò": "o", "ô": "o", "õ": "o", "ö": "o",
    "ú": "u", "ù": "u", "û": "u", "ü": "u",
    "ç": "c", "ñ": "n",
    "Á": "A", "À": "A", "Â": "A", "Ã": "A", "Ä": "A",
    "É": "E", "È": "E", "Ê": "E", "Ë": "E",
    "Í": "I", "Ì": "I", "Î": "I", "Ï": "I",
    "Ó": "O", "Ò": "O", "Ô": "O", "Õ": "O", "Ö": "O",
    "Ú": "U", "Ù": "U", "Û": "U", "Ü": "U",
    "Ç": "C", "Ñ": "N",
    "§": "S", "°": "o", "ª": "a", "º": "o",
    "–": "-", "—": "-",
    "\u201c": '"', "\u201d": '"', "\u2018": "'", "\u2019": "'",
  };
  return text.replace(/[^\x00-\x7F]/g, (char) => map[char] || char);
}

function addWatermark(doc: jsPDF) {
  const totalPages = doc.getNumberOfPages();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);

    // Diagonal watermark text
    doc.saveGraphicsState();
    doc.setFontSize(50);
    doc.setTextColor(200, 200, 200);
    doc.setFont("helvetica", "bold");

    // Center of page, rotated 45 degrees
    const centerX = pageWidth / 2;
    const centerY = pageHeight / 2;

    doc.text("VERSAO GRATUITA", centerX, centerY - 20, {
      align: "center",
      angle: 45,
    });
    doc.setFontSize(18);
    doc.text("Upgrade em documind.com.br", centerX, centerY + 10, {
      align: "center",
      angle: 45,
    });

    doc.restoreGraphicsState();
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Nao autorizado" }, { status: 401 });
    }

    const { title, content } = await req.json();

    if (!title || !content) {
      return NextResponse.json({ error: "Dados invalidos" }, { status: 400 });
    }

    // Check user plan for watermark
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { plan: true },
    });
    const isFree = !user || user.plan === "FREE";

    // Generate PDF
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const maxWidth = pageWidth - margin * 2;

    // Transliterate content for jsPDF compatibility
    const safeTitle = transliterate(title);
    const safeContent = transliterate(content);

    // Title
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    const titleLines = doc.splitTextToSize(safeTitle, maxWidth);
    doc.text(titleLines, margin, 30);

    // Separator line
    const titleHeight = 30 + titleLines.length * 8;
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, titleHeight, pageWidth - margin, titleHeight);

    // Content
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    const contentLines = doc.splitTextToSize(safeContent, maxWidth);

    let y = titleHeight + 10;
    const pageHeight = doc.internal.pageSize.getHeight();

    for (const line of contentLines) {
      if (y > pageHeight - 25) {
        doc.addPage();
        y = 20;
      }
      doc.text(line, margin, y);
      y += 6;
    }

    // Footer on each page
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(
        `Gerado por Documind - Pagina ${i} de ${totalPages}`,
        pageWidth / 2,
        pageHeight - 10,
        { align: "center" }
      );
      doc.setTextColor(0, 0, 0);
    }

    // Add watermark for FREE plan users
    if (isFree) {
      addWatermark(doc);
    }

    const pdfBuffer = doc.output("arraybuffer");
    const filename = sanitizeFilename(safeTitle);

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { error: "Erro ao gerar PDF" },
      { status: 500 }
    );
  }
}
