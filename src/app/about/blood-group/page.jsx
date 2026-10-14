import BloodGroupDirectory from "@/views/BloodGroupDirectory";

export const metadata = {
  title: "Blood Group Directory – IMA Moradabad Doctors",
  description:
    "IMA Moradabad ke members ki blood group wise list. A+, A-, B+, B-, AB+, AB-, O+, O- blood group wale doctors ke naam search karein.",
};

export default function BloodGroupDirectoryPage() {
  return <BloodGroupDirectory />;
}
