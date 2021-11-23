import React, { useEffect, useState } from "react";
import "./styles/style.css";
import { useHistory } from "react-router-dom";
import { FormF } from "../../../components/Forms/FormFive";
import { api } from "../../../services/api";
import { FiMail, FiPhone } from "react-icons/fi";
import { MdOutlineLock, MdLocationPin, MdClose, MdEdit } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaRegNewspaper } from "react-icons/fa";
import { ListSixElements } from "../../../components/Lists/ListSixElements/index";

export function Instituicao() {
  const history = useHistory();
  const [fantasyName, setFantasyName] = useState("");
  const [socialReason, setSocialReason] = useState("");
  const [adress, setAdress] = useState("");
  const [CNPJ, setCNPJ] = useState("");
  const [phone, setPhone] = useState("");
  const [listInstution, setListInstitution] = useState([]);

  const createInstitute = async (e) => {
    e.preventDefault();

    console.log("entrou no método");
    const { data, status } = await api.post("/instituicoes", {
      NomeFantasia: fantasyName,
      RazaoSocial: socialReason,
      Endereco: adress,
      CNPJ,
      Telefone: phone,
    });

    if (status === 200) {
      localStorage.setItem("userToken", data.token);
      console.log("resutlado da API foi 200");
      console.log(data);

      await getInstitutions();
    } else {
      console.log(data);
    }
  };

  async function getInstitutions() {
    const { data, status } = await api.get("/instituicoes");
    console.log("Entrou no método de Get");
    if (status === 200) {
      setListInstitution(data);
      console.log(data);
      console.log("Requisição voltou 200");
      // const isInterested = data.find(
      //   (x) => x.idUsuarioNavigation.idUsuario == tokenDecoded.jti
      // );
    }
  }

  useEffect(() => {
    getInstitutions();
  }, []);
  const redirectBack = async (e) => {
    history.push("/cadastro");
  };
  const updateInstitute = async (e) => {
    
  };

  return (
    <div className="instituteScreen">
      <div className="contentArea">
        <div className="displayColumn">
          <div className="instituteReturn">
            <a onClick={redirectBack}>Voltar</a>
          </div>
          <div className="instituteRow">
            <FormF
              title="instituição"
              onSubmit={createInstitute}
              type="text"
              placeholder="Nome Fantasia"
              state={fantasyName}
              method={(e) => setFantasyName(e.target.value)}
              icon={<AiOutlineUser />}
              type2="text"
              placeholder2="Razão Social"
              state2={socialReason}
              method2={(e) => setSocialReason(e.target.value)}
              icon2={<FaRegNewspaper />}
              type3="text"
              placeholder3="Endereço"
              state3={adress}
              method3={(e) => setAdress(e.target.value)}
              icon3={<MdLocationPin />}
              type4="number"
              placeholder4="CNPJ"
              state4={CNPJ}
              method4={(e) => setCNPJ(e.target.value)}
              icon4={<HiOutlineDocumentText />}
              type5="number"
              placeholder5="Telefone"
              state5={phone}
              method5={(e) => setPhone(e.target.value)}
              icon5={<FiPhone />}
            ></FormF>
            <ListSixElements title="Listagem de instituições">
              <tr>
                <th>ID Instituição</th>
                <th>Nome Fantasia</th>
                <th>Razão Social</th>
                <th>Enredeço</th>
                <th>CNPJ</th>
                <th>Telefone</th>
                <th>Ações</th>
              </tr>
              {listInstution.map((item) => (
                <tr key={item.idInstituicao} className="trBody">
                  <td>{item.idInstituicao}</td>
                  <td>{item.nomeFantasia}</td>
                  <td>{item.razaoSocial}</td>
                  <td>{item.endereco}</td>
                  <td>{item.cnpj}</td>
                  <td>{item.telefone}</td>
                  <td>
                    <div id="icons">
                      <MdEdit
                        onClick={updateInstitute}
                        className="icon edit-icon"
                      />
                      <MdClose className="icon close-icon" />
                    </div>
                  </td>
                </tr>
              ))}
            </ListSixElements>
          </div>
        </div>
      </div>
    </div>
  );
}
