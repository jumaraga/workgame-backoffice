import { useForm, SubmitHandler } from "react-hook-form"
import Form from "antd"
interface IFormInput {
   Estado: string
   Categoria: string
   Marca: number
   Modelo: number
}

export default function ProductForm() {
   const { register, handleSubmit } = useForm<IFormInput>()
   const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

   return (
      // <form onSubmit={handleSubmit(onSubmit)}>
         <div className="border-b border-gray-900/10 pb-12 grid  grid-cols-1 gap-4">
         <div  >
            <label className="block text-sm font-medium leading-6 text-gray-900">Estado</label>
            <div className="mt-2">
               <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" {...register("Estado", { required: true, maxLength: 20 })} />
            </div>
         </div>
         <div >
            <label className="block text-sm font-medium leading-6 text-gray-900">Categoria</label>
            <div className="mt-2">
               <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" {...register("Categoria", { pattern: /^[A-Za-z]+$/i })} />
            </div>
         </div>
         <div >
            <label className="block text-sm font-medium leading-6 text-gray-900">Marca</label>
            <div className="mt-2">
               <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" type="number" {...register("Marca", { min: 18, max: 99 })} />
            </div>
         </div>
         <div >
            <label className="block text-sm font-medium leading-6 text-gray-900">Modelo</label>
            <div className="mt-2">
               <input 
               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                type="number" {...register("Modelo", { min: 18, max: 99 })} />
            </div>
         </div>

         <input className=" bg-blue-600" type="submit" />
         </div>
      // </form>
   )
}