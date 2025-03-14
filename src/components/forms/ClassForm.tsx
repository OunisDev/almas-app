"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";
const schema = z.object({
    name:z.string()
    .min(3,{message :"Class Name must be at least 3 characters long !"})
    .max(20,{message :"Class Name must be at most 20 characters long !"}),
    capacity:z.number().min(1,{message :"Capacity is required!"}),
    supervisor:z.string().min(1,{message :"Supervisor is required!"}),
    grade:z.string().min(1,{message :"Grade is required!"}),
});

type Inputs =z.infer<typeof schema>;

const StudentForm =({
    type,
    data,
}:{
    type:"create" | "update";
data?: any;
}) =>{
    const{
        register,
        handleSubmit,
        formState:{errors},
    } = useForm<Inputs>({
        resolver:zodResolver(schema),
    });
    const onSubmit =handleSubmit((data) => {
        console.log(data);
    });
    return (<form className="flex flex-col gap-8" onSubmit={onSubmit}>
        <h1 className="text-xl font-semibold">Create a new class</h1>

<span className="text-xs text-gray-400 font-medium">Class Information</span>
    <div className="flex justify-between flex-wrap gap-4">
        <InputField label="Class Name" name="name" defaultValue={data?.name} register={register} error={errors?.name}/>
        <InputField label="capacity" name="Capacity" defaultValue={data?.capacity} register={register} error={errors?.capacity}/>
    
    <div className="flex flex-col gap-2 w-full md:w-1/4">
        <label className="text-xs text-gray-500">Grade</label>
        <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full" {...register("grade")} defaultValue={data?.grade}>
        <option value="1">10/1</option>
        <option value="2">10/2</option>
        </select>
        {errors.grade?.message && (<p className="text-xs text-red-400">{errors.grade.message.toString()}</p>)}    

        <label className="text-xs text-gray-500">Supervisor</label>
        <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full" {...register("supervisor")} defaultValue={data?.supervisor}>
        <option value="1">s1</option>
        <option value="2">s2</option>
        </select>
        {errors.supervisor?.message && (<p className="text-xs text-red-400">{errors.supervisor.message.toString()}</p>)} 
    </div>

    </div>
        <button className="bg-blue-400 text-white p-2 rounded-md">
            {type === "create" ? "Create" : "Update"}
        </button>
    </form>
    );
    };
export default StudentForm;