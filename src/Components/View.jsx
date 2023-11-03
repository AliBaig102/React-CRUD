import { useCRUD } from "../contexts"

export default function View({closeModal}) {
    const {singledata}=useCRUD()
  return (
    <div className="fixed inset-0 bg-[#00000057] grid place-content-center">
        <div className="bg-white  rounded-md shadow-xl p-3">
            <button 
            className="bg-neutral-500  text-white flex items-center justify-center w-8 h-8 rounded-full text-2xl relative left-[90%]"
            onClick={()=>closeModal(false)}
            >X</button>
            <ul className="flex  gap-3 my-2">
                <li className="bg-neutral-500 text-white px-2 w-[10vw] rounded">Student ID</li>
                <li className="bg-neutral-500 text-white px-2 w-[10vw] rounded">Student Name</li>
                <li className="bg-neutral-500 text-white px-2 w-[10vw] rounded">Student City</li>
                <li className="bg-neutral-500 text-white px-2 w-[10vw] rounded">Student Fees</li>
            </ul>
            <ul className="flex gap-3">
                <li className="border w-[10vw] px-2 rounded">{singledata.student_id}</li>
                <li className="border w-[10vw] px-2 rounded">{singledata.student_name}</li>
                <li className="border w-[10vw] px-2 rounded">{singledata.student_city}</li>
                <li className="border w-[10vw] px-2 rounded">{singledata.student_fees}</li>
            </ul>
        </div>
    </div>
  )
}
