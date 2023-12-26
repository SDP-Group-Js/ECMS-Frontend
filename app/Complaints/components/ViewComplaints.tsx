import React, { useState } from "react";
import ComplaintCard from "./ComplaintCard";

enum Status {
  NotAssigned = "NotAssigned",
  Ongoing = "Ongoing",
  Completed = "Completed",
}

type ViewComplaintsProps = {
  complaints: any;
  institutionName: string;
};

const ViewComplaints = ({
  complaints,
  institutionName,
}: ViewComplaintsProps) => {
  // If a complaint is selected a modal should pop up showing more details on selected complaint
  const [selectedComplaint, setSelectedComplaint] = useState<any>();
  return (
    <div>
      <div className="my-2 flex text-xl font-bold">
        <h3>Unallocated Complaints</h3>
      </div>
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
