import { Button, Nav } from "components"






export function DashboardPage() {





    return (
        <>
            <Nav/>

         <div className="container">

            <form className="form" >
                <label className="font-bold" htmlFor="destinationName">Nome completo</label>
                <input type="text"  />

                <label className="font-bold" htmlFor="destinatioAdress">E-mail</label>
                <input type="text"  />

                <label className="font-bold" htmlFor="destinationCPF">CPF</label>
                <input type="number"  />

                <label className="font-bold" htmlFor="destinationTel">Celular</label>
                <input type="number" placeholder="(xx) xxxxx-xxxx"  />

                <label className="font-bold" htmlFor="destinationZap">CEP</label>
                <input type="number"   />

                <label className="font-bold" htmlFor="destinationAdress">Endereço</label>
                <input type="text"  />

                <label className="font-bold" htmlFor="destinationNumber">Número</label>
                <input type="number"  />

                <label className="font-bold" htmlFor="">Complemento</label>
                <input type="text"  />

                <label className="font-bold" htmlFor="">Referência</label>
                <input type="text"  />

                <label className="font-bold" htmlFor="">Bairro</label>
                <input type="text"  />
                
                <label className="font-bold" htmlFor="">Cidade</label>
                <input type="text"  />

                <label className="font-bold" htmlFor="">Estado</label>
                <input type="text"  />

                <label className="font-bold" htmlFor="">País</label>
                <input type="text"  />

                
            </form>
            <Button>Enviar</Button>
            
          </div>
        </>
    )
}