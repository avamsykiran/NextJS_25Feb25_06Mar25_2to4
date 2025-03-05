"use client"
import { useParams } from "next/navigation";

const GreetPage2 = () => {

    let {userNames} = useParams();

    return (
        <section className="box">
            <h3>Greet Page</h3>
            {
                userNames && userNames.length>0 && (userNames as string[]).map( (unm:string) => (
                    <p> Hello <strong>{unm}</strong>! We welcome you all here.  </p>
                ) )
            }
            
        </section>
    );
}

export default GreetPage2;