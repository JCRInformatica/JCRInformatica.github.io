<?php
$my_domain = "jcrinformatica.com";

if ($_POST['nome'] !== '' && $_POST['email'] !== '' && $_POST['assunto'] !== '' && $_POST['honeypot'] === '') {
	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$assunto = $_POST['assunto'];
	$mensagem = $_POST['mensagem'];

	$email_remetente = "contato@" . $my_domain; // deve ser uma conta de email do seu dominio
	$email_destinatario = "contato@johnylab.net"; // pode ser qualquer email que receberá as mensagens
	$email_reply = "$email";
	$email_assunto = "Contato do site: $assunto"; // Este será o assunto da mensagem

	//Monta o Corpo da Mensagem
	$email_conteudo = "Nome: $nome \n";
	$email_conteudo .= "Email: $email \n";
	$email_conteudo .= "Telefone: $telefone \n";
	$email_conteudo .= "\n=== Mensagem ===\n\n$mensagem \n";

	//Seta os Headers (Alterar somente caso necessario)
	$email_headers = implode ( "\n",array ( "From: $email_remetente", "Reply-To: $email_reply", "Return-Path: $email_remetente","MIME-Version: 1.0","X-Priority: 3","Content-Type: text/html; charset=UTF-8" ) );

	//Enviando o email
	if (mail ($email_destinatario, $email_assunto, nl2br($email_conteudo), $email_headers)){
		header('Location: http://' . $my_domain . '/email_enviado.html');
		exit('email enviado');
	}
	else{
		header('Location: http://' . $my_domain . '/email_com_erro.html');
		exit('email com erro');
	}
}
else {
	header('Location: http://' . $my_domain . '/email_incompleto.html');
	exit('dados faltando');
}
?>