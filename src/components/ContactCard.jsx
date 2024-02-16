import  {deleteDoc , doc} from "firebase/firestore";
import {RiEditCircleLine} from "react-icons/ri";
import {HiOutlineUserCircle} from "react-icons/hi";
import {IoMdTrash} from "react-icons/io";
import {db} from "../config/firebase";
import AddandUpdateContact from "./AddandUpdateContact";
import useDisclouse from "../hooks/useDisclouse";
import {toast} from "react-toastify";



const ContactCard = ({contact}) => {
  const {onClose , onOpen , isOpen }=useDisclouse();

  

const deleteContact= async(id) =>{
  try{
      await deleteDoc(doc(db,"contacts",id));
      toast.success("Contact Deleted Successfully");
  }catch(error){
    console.log(error);
  }
}

  return (
    <>
      <div kay={contact.id} 
          className='bg-yellow flex justify-between items-center
          p-2 rounded-lg'>
          <div className='flex gap-1'>
          <HiOutlineUserCircle className='text-orange text-4xl'/>
          <div className=''>
            <h2 className='font-medium'>{contact.name}</h2>
            <p className='text-sm'>{contact.email}</p>
          </div>
          </div>
          <div className='flex text-3xl'>
             <RiEditCircleLine onClick={onOpen} 
             className="cursor-pointer"/>
             <IoMdTrash onClick={()=>deleteContact(contact.id)}
             className="text-orange cursor-pointer"/> 
          </div>
    </div>
  <AddandUpdateContact
   contact={contact} 
   isUpdate
    isOpen={isOpen} 
    onClose={onClose}/>
    </>
  );
};

export default ContactCard;
