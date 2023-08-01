import './Jobs.css';

import React, { useContext } from 'react';
import { CurrenInfoContext } from '../../context/CurrenInfoContext';

export default function Jobs({ jobs, getJobInfoById }) {

 // Accedemos al contexto para obtener la información actual
 const currentInfo = useContext(CurrenInfoContext);

 // Función para mostrar la información del trabajo seleccionado
 const handleJobClick = (id) => {
   getJobInfoById(id);
 };

 return (
   <div>
     <h2>Jobs Page</h2>
     <ul>
       {jobs.map((job) => (
         <li key={job.id} onClick={() => handleJobClick(job.id)}>
           {job.name}
         </li>
       ))}
     </ul>
     {currentInfo && (
       <div>
         <h3>Selected Job Information:</h3>
         <p>Job ID: {currentInfo.id}</p>
         <p>Job Name: {currentInfo.name}</p>

         {/* más detalles del trabajo aquí  */}
       </div>
     )}
   </div>
 );
  }

  