/**
 * Nomination Service & Validation logic
 * 
 * Handles nomination submission, client/server re-validation,
 * 5MB file verification, reference generation, and mock backend integration.
 */

export async function submitNominationAction(formData) {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 800));

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

  // Server-side validation
  if (!nominatorName) {
    throw new Error("Nominator name is required.");
  }

  if (!nominatorMobile || !/^[6-9]\d{9}$/.test(nominatorMobile)) {
    throw new Error("A valid 10-digit mobile number starting with 6-9 is required.");
  }

  if (!nominatorEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nominatorEmail)) {
    throw new Error("A valid email address is required.");
  }

  if (!relationship) {
    throw new Error("Relationship to nominee is required.");
  }

  if (!nomineeName) {
    throw new Error("Nominee full name is required.");
  }

  if (!nomineeSpeciality) {
    throw new Error("Nominee speciality or designation is required.");
  }

  if (!nomineeHospital) {
    throw new Error("Hospital or clinic is required.");
  }

  if (!awardCategory) {
    throw new Error("Award category is required.");
  }

  if (!citation || citation.length < 150) {
    throw new Error("Citation must be at least 150 characters.");
  }

  if (citation.length > 1200) {
    throw new Error("Citation cannot exceed 1200 characters.");
  }

  if (!declared || declared === "false") {
    throw new Error("You must agree to the declaration statement.");
  }

  // Validate files
  const files = formData.getAll("files");
  const maxBytes = 5 * 1024 * 1024; // 5 MB
  const allowedMime = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];

  for (const file of files) {
    if (file && typeof file === "object" && file.size > 0) {
      if (file.size > maxBytes) {
        throw new Error(`File "${file.name}" exceeds the 5 MB maximum size limit.`);
      }
      if (file.type && !allowedMime.includes(file.type)) {
        throw new Error(`File "${file.name}" has an unsupported format (${file.type}). Allowed: PDF, JPG, PNG.`);
      }
    }
  }

  // Generate Reference Number format: IMA-2026-1234
  const currentYear = new Date().getFullYear();
  const randomSerial = Math.floor(1000 + Math.random() * 9000);
  const refNumber = `IMA-${currentYear}-${randomSerial}`;

  // =========================================================================
  // TODO: Save to Database (e.g., PostgreSQL / MongoDB / Supabase / Prisma)
  // const nominationRecord = await db.nominations.create({
  //   data: {
  //     refNumber,
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
  //     createdAt: new Date(),
  //   }
  // });
  // =========================================================================

  // =========================================================================
  // TODO: Email the Awards Committee & Nominator
  // await sendMail({
  //   to: "imamoradabad@gmail.com",
  //   cc: nominatorEmail,
  //   subject: `[New Award Nomination] ${refNumber} - ${nomineeName} (${awardCategory})`,
  //   html: renderNominationEmailTemplate({ refNumber, nominatorName, nomineeName, awardCategory, citation })
  // });
  // =========================================================================

  return {
    success: true,
    ref: refNumber,
    message: "Nomination submitted successfully",
  };
}
