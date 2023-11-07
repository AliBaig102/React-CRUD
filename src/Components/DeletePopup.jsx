import { useCRUD } from "../contexts"

export default function DeletePopup({closeModal,deleteId}) {
  const {deleteData,result}=useCRUD();
  return (
    <div 
    className="fixed inset-0 bg-[#00000057] grid place-content-center"
    onClick={(e)=>{
      if(e.target==e.currentTarget)closeModal(false)
    }}
    >
        <div className="bg-white  max-w-lg rounded-md shadow-xl p-3">
            <h3 className="text-3xl">
                are you sure yoy want to delete this record?
            </h3>
            <div className="my-4 flex items-center justify-center gap-16 w-[60%] mx-auto">
                <button 
                className="bg-green-500 text-white text-3xl px-4 rounded shadow-lg"
                onClick={()=>{closeModal(false)}}
                >Cancel</button>
                <button 
                className="bg-red-500 text-white text-3xl px-4 rounded shadow-lg"
                onClick={()=>{
                  deleteData(deleteId)
                    console.log(result)
                  if(result.deleteResult){
                    closeModal(false)
                    console.log(result)
                  }
                }}
                >Delete</button>
            </div>
        </div>
    </div>
  )
}
