'use server'

// import prisma from "@/lib/prisma";

//import prisma from "@/lib/prisma";
// import prisma from "@/lib/prisma"

interface FormInputs {
    email: string;
    
}


export const solicitud = async (FormInput: FormInputs) => {
    const data = FormInput;
    // console.log(data);
    // const fecha = new Date(data.fechaNacimiento);
    // console.log(fecha);
    try {
        //? Envio de correo
        const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Access-Control-Allow-Origin", "*");
                myHeaders.append("Access-Control-Allow-Methods", "POST");
                myHeaders.append("Access-Control-Allow-Headers", "Content-Type");
                // myHeaders.append('Access-Control-Allow-Credentials', "true");
        
                const raw = JSON.stringify({
                    email: data.email,
                    
                });
        
                const requestOptions: RequestInit = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
        
                };
        
                await fetch("https://healthyheartjourney.com/api/email", {
                    ...requestOptions,
                    cache: 'reload',
                }).then(r => r.json());
                // return {
                //     ok: true,
                //     message: 'solicitud de analisis de credito ingresada',
                //     // saveSolicitud: saveSolicitud,
                // }
        
        return {
            ok: true,
            message: 'Email Enviado',
            // saveSolicitud: saveSolicitud,
        }
    } catch (error) {
        console.log(error);
        
        // throw new Error(
        //     error
        //   );
        
    }

    
}