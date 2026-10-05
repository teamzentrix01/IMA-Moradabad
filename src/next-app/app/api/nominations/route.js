import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();

    // 1. Extract fields
    const nominatorName = formData.get("nominatorName")?.toString().trim();
    const nominatorMobile = formData.get("nominatorMobile")?.toString().trim();
    const nominatorEmail = formData.get("nominatorEmail")?.toString().trim();
    const relationship = formData.get("relationship")?.toString().trim();

    const nomineeName = formData.get("nomineeName")?.toString().trim();
    const nomineeSpeciality = formData.get("nomineeSpeciality")?.toString().trim();
    const nomineeHospital = formData.get("nomineeHospital")?.toString().trim();
    const nomineeRegNo = formData.get("nomineeRegNo")?.toString().trim();
    const awardCategory = formData.get("awardCategory")?.toString().trim();

    const citation = formData.get("citation")?.toString().trim();
    const declared = formData.get("declared");

    // 2. Server-side validation
    if (!nominatorName) {
      return NextResponse.json(
        { error: "Nominator full name is required." },
        { status: 400 }
      );
    }

    if (!nominatorMobile || !/^[6-9]\d{9}$/.test(nominatorMobile)) {
      return NextResponse.json(
        { error: "A valid 10-digit mobile number starting with 6-9 is required." },
        { status: 400 }
      );
    }

    if (!nominatorEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nominatorEmail)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!relationship) {
      return NextResponse.json(
        { error: "Relationship to the nominee is required." },
        { status: 400 }
      );
    }

    if (!nomineeName) {
      return NextResponse.json(
        { error: "Nominee full name is required." },
        { status: 400 }
      );
    }

    if (!nomineeSpeciality) {
      return NextResponse.json(
        { error: "Nominee speciality or designation is required." },
        { status: 400 }
      );
    }

    if (!nomineeHospital) {
      return NextResponse.json(
        { error: "Nominee hospital or clinic name is required." },
        { status: 400 }
      );
    }

    const validCategories = [
      "lifetime-achievement",
      "clinical-excellence",
      "young-doctor",
      "community-service",
      "research-education",
      "blood-humanitarian",
    ];
    if (!awardCategory || !validCategories.includes(awardCategory)) {
      return NextResponse.json(
        { error: "A valid award category selection is required." },
        { status: 400 }
      );
    }

    if (!citation || citation.length < 150) {
      return NextResponse.json(
        { error: "Citation must contain at least 150 characters." },
        { status: 400 }
      );
    }

    if (citation.length > 1200) {
      return NextResponse.json(
        { error: "Citation cannot exceed 1200 characters." },
        { status: 400 }
      );
    }

    if (!declared || declared === "false") {
      return NextResponse.json(
        { error: "You must accept the truthfulness declaration before submitting." },
        { status: 400 }
      );
    }

    // 3. File validations (Max 5 MB each, PDF / JPG / PNG)
    const files = formData.getAll("files");
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
    const ALLOWED_MIME_TYPES = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];

    const uploadedFilesMeta = [];

    for (const file of files) {
      if (file && typeof file === "object" && file.size > 0) {
        if (file.size > MAX_FILE_SIZE) {
          return NextResponse.json(
            { error: `File "${file.name}" exceeds the maximum allowed size of 5 MB.` },
            { status: 400 }
          );
        }
        if (file.type && !ALLOWED_MIME_TYPES.includes(file.type)) {
          return NextResponse.json(
            { error: `File "${file.name}" has an unsupported format. Allowed formats are PDF, JPG, and PNG.` },
            { status: 400 }
          );
        }

        // Convert file buffer for cloud storage if needed
        // const bytes = await file.arrayBuffer();
        // const buffer = Buffer.from(bytes);
        uploadedFilesMeta.push({
          name: file.name,
          size: file.size,
          type: file.type,
        });
      }
    }

    // 4. Generate Reference Number: IMA-2026-1234
    const currentYear = new Date().getFullYear();
    const randomSerial = Math.floor(1000 + Math.random() * 9000);
    const ref = `IMA-${currentYear}-${randomSerial}`;

    // =========================================================================
    // TODO: SAVE TO DATABASE (e.g., PostgreSQL, MongoDB, Prisma, or Supabase)
    // -------------------------------------------------------------------------
    // Example:
    // await prisma.nomination.create({
    //   data: {
    //     referenceNumber: ref,
    //     nominatorName,
    //     nominatorMobile,
    //     nominatorEmail,
    //     relationship,
    //     nomineeName,
    //     nomineeSpeciality,
    //     nomineeHospital,
    //     nomineeRegNo,
    //     awardCategory,
    //     citation,
    //     files: uploadedFilesMeta,
    //     status: "PENDING_REVIEW",
    //     submittedAt: new Date(),
    //   }
    // });
    // =========================================================================

    // =========================================================================
    // TODO: EMAIL THE AWARDS COMMITTEE & SEND CONFIRMATION RECEIPT
    // -------------------------------------------------------------------------
    // Example using Resend / Nodemailer:
    // await sendEmail({
    //   to: ["imamoradabad@gmail.com", "awards@imamoradabad.com"],
    //   subject: `[New Award Nomination] ${ref} - Dr. ${nomineeName} (${awardCategory})`,
    //   html: `
    //     <h2>New Building Moradabad Award Nomination Received</h2>
    //     <p><strong>Ref Number:</strong> ${ref}</p>
    //     <p><strong>Category:</strong> ${awardCategory}</p>
    //     <p><strong>Nominee:</strong> ${nomineeName} (${nomineeSpeciality} at ${nomineeHospital})</p>
    //     <p><strong>Nominator:</strong> ${nominatorName} (${nominatorEmail}, ${nominatorMobile})</p>
    //     <p><strong>Citation:</strong></p>
    //     <blockquote>${citation}</blockquote>
    //   `
    // });
    // =========================================================================

    return NextResponse.json(
      {
        success: true,
        ref,
        message: "Nomination received successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing nomination:", error);
    return NextResponse.json(
      { error: "Internal server error while processing the nomination." },
      { status: 500 }
    );
  }
}
