import React, { useState } from "react";
import ComplaintCard from "./ComplaintCard";

enum Status {
  NotAssigned = "NotAssigned",
  Ongoing = "Ongoing",
  Completed = "Completed",
}

type ViewComplaintsProps = {
  complaints: any;
};

const ViewComplaints = ({ complaints }: ViewComplaintsProps) => {
  // If a complaint is selected a modal should pop up showing more details on selected complaint
  const [selectedComplaint, setSelectedComplaint] = useState<any>();
  return (
    <div>
      <div>
        {complaints.map((complaint: any, index: number) => (
          <ComplaintCard
            complaintId={complaint.id}
            complaintTitle={complaint.complaint_title}
            complaintDescription={complaint.complaint_description}
            complaintComplainer={complaint.complainer}
            complaintInvestigation={complaint.investigation}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewComplaints;
