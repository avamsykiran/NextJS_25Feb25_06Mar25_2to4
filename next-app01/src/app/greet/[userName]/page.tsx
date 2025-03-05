"use client"
import { useParams } from "next/navigation";

const GreetPage = () => {

    let { userName } = useParams();

    return (
        <section className="box">
            <h3>Greet Page</h3>
            <p> Hello <strong>{userName}</strong>! We welcome you here.  </p>
        </section>
    );
}

export default GreetPage;