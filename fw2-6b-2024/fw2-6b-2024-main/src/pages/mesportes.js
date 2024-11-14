import { Container } from "react-bootstrap";
import Menu from "./modulos/navbar";
import Footer from "./component/footer";
export default function mesportes(){
    return <>
    <Menu/>
        <Container>
            <Container className="text-center rouded-pill border border-primary">
             Produtos de esportes
            </Container> 
            <Container>
             dados
             </Container>
        </Container>
        <Footer/>    
    </>
}