
const GreetServerPage = async ( {params}:{params:Promise<{userName:string}>} ) => {
    
    let { userName } = await params;

    return (
        <section className="box">
            <h3>Greet Page</h3>             
            <p> Hello <strong>{userName}</strong>! We welcome you here.  </p>
        </section>
    );
}

export default GreetServerPage;