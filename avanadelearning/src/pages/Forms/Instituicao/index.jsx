import React, { useState } from "react";
import "./styles/style.css";
import { useHistory } from "react-router-dom";
import { FormF } from "../../../components/Forms/FormFive";
import { api } from "../../../services/api";
import { FiMail, FiPhone } from "react-icons/fi";
import { MdOutlineLock, MdLocationPin } from "react-icons/md";
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
    const { data, status } = await api.post("/Instituicao", {
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
      history.push("/curso");
    }
  };
  const listInstitute = async (e) => {
    api.get("/instituicao").then((resposta) => {
      setListInstitution({ listInstution: resposta.data });
    });
    console.log({ listInstution });
  };
  const redirectBack = async (e) => {
    history.push("/cadastro");
  };

  return (
    <div className="contentArea">
      <div className="displayColumn">
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
      </div>
      <div>
        <ListSixElements></ListSixElements>
      </div>
    </div>
  );
}
