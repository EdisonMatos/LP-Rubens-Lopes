/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CiUser, CiMail, CiChat1 } from "react-icons/ci";
import emailjs from "@emailjs/browser";

const WhatsappForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const capitalizeFirstLetter = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleNameChange = (e) => {
    const input = e.target.value;
    const onlyLetters = input.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
    setName(capitalizeFirstLetter(onlyLetters));
  };

  const sendToWhatsapp = async () => {
    setIsSubmitting(true);

    const validationErrors = {};

    if (!name) {
      validationErrors.name = "O campo Nome é obrigatório.";
    } else if (!validateName(name)) {
      validationErrors.name = "Nome inválido.";
    }

    if (!email) {
      validationErrors.email = "O campo E-mail é obrigatório.";
    } else if (!validateEmail(email)) {
      validationErrors.email = "E-mail inválido.";
    }

    if (!assunto) {
      validationErrors.assunto = "O campo Assunto é obrigatório.";
    }

    if (!validateMessage(message)) {
      validationErrors.message = "O campo Mensagem é obrigatório.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      name,
      email,
      assunto, // ⚠️ envia diretamente o estado 'assunto' para EmailJS
      message,
    };

    try {
      const response = await emailjs.send(
        "service_qbapzpc",
        "template_e64hnds",
        templateParams,
        "dFuQH8WEV8XP6c0ZF"
      );
      console.log(
        "Mensagem enviada com sucesso:",
        response.status,
        response.text
      );

      setName("");
      setEmail("");
      setAssunto("");
      setMessage("");
      setIsSubmitting(false);
      alert(
        "Recebemos os seus dados com sucesso! Em breve nossa equipe entrará em contato. Obrigado!"
      );
      window.location.reload();
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
      alert("Houve um erro ao enviar o e-mail. Tente novamente.");
      setIsSubmitting(false);
    }
  };

  const validateName = (name) => {
    const namePattern = /^[a-zA-ZÀ-ÿ\s]{3,}$/;
    return namePattern.test(name.trim());
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email.trim());
  };

  const validateMessage = (message) => !!message.trim();

  return (
    <div className="bg-primary p-6 rounded-[10px] w-full desktop1:w-full h-auto max-w-[485px]">
      <div className="w-full text-paragraph3 phone3:text-paragraph4">
        {/* Nome completo */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <CiUser />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Nome completo"
              required
            />
          </div>
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <CiMail />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
            />
          </div>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        {/* Assunto */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <CiChat1 />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="assunto"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              placeholder="Assunto"
              required
            />
          </div>
          {errors.assunto && <p className="text-red-500">{errors.assunto}</p>}
        </div>

        {/* Mensagem */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-start justify-center w-12 px-1 bg-bgSectionLight">
              <CiChat1 className="mt-[14px]" />
            </div>
            <textarea
              className="w-full px-1 py-2 border-0 rounded-none"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mensagem"
              required
            />
          </div>
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>

        {/* Botão */}
        <button
          type="button"
          className="flex items-center w-full font-medium text-primary bg-bgSectionDark transition-all rounded-lg h-10 phone2:h-12 hover:scale-105"
          onClick={sendToWhatsapp}
          disabled={isSubmitting}
        >
          <div className="flex items-center justify-center w-full">
            <p>{isSubmitting ? "Enviando..." : "Enviar mensagem"}</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WhatsappForm;
