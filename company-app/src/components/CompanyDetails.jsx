import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CompanyDetails() {
    const { id } = useParams();
  return (
    <div>
        <h2>Company Details</h2>
        <h5> {id}</h5>
    </div>
  )
}
