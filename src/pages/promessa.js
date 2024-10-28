import { Container } from "react-bootstrap";
import Menu from "./component /navbar";
import Footer from "./component /footer";
import { useState } from "react";

export default function Promessa(){
    const [prometido, setPrometido] = useState("")
    setTimeout(() => {
        setPrometido("é uma dívida")
    document.title="Promessa é divida"
    }, 4000);
    return <>
    <Menu/>
    <Container>
        Promessa {prometido=== "" ? <img src="./loading.gif" width={100} height={50}/> : prometido}
    </Container>
    <Footer/>
    </>
}