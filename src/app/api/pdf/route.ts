import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import jsPDF from "jspdf";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { title, content } = await req.json();

    if (!title || !content) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    // Generate PDF
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const maxWidth = pageWidth - margin * 2;

    // Title
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    const titleLines = doc.splitTextToSize(title, maxWidth);
    doc.text(titleLines, margin, 30);

    // Separator line
    const titleHeight = 30 + titleLines.length * 8;
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, titleHeight, pageWidth - margin, titleHeight);

    // Content
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    const contentLines = doc.splitTextToSize(content, maxWidth);

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
        `Gerado por Documind — Página ${i} de ${totalPages}`,
        pageWidth / 2,
        pageHeight - 10,
        { align: "center" }
      );
      doc.setTextColor(0, 0, 0);
    }

    const pdfBuffer = doc.output("arraybuffer");

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${title}.pdf"`,
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
