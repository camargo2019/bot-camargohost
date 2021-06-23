const Discord = require("discord.js")
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`Bot foi iniciado!`);
});

const comoComprar = new Discord.MessageEmbed()
	.setColor('#007bff')
	.setTitle('CamargoHost - Como comprar?')
    .setAuthor('CamargoHost - Serviços de Hospedagem!', 'https://camargohost.com.br/logo.png', 'https://camargohost.com.br')
	.setDescription('Saiba como assinar seu plano de hospedagem!')
	.setThumbnail('https://camargohost.com.br/logo.png')

	.addField('Escolher o Produto:', 'Acesse nosso [**website**](http://camargohost.com.br), selecione qual produto deseja comprar', false)

    .addField('Colocando as informações:', 'Após escolher seu produto coloque as informações como Nome, E-mail, Telefone e Endereço. Lembrando só usamos essas informações para contato e faturamento!', false)

    .addField('Metodo de Pagamento:', 'Agora só escolher o metodo de pagamento e prosseguir para o pagamento! após o pagamento enviar comprovante via ticket no discord ou no site!', false)
    
	.setFooter('CamargoHost - Serviços de Qualidade!', 'https://camargohost.com.br/logo.png');

const pagamentos = new Discord.MessageEmbed()
	.setColor('#007bff')
	.setTitle('CamargoHost - Metodos de Pagamento!')

    .setAuthor('CamargoHost - Serviços de Hospedagem!', 'https://camargohost.com.br/logo.png', 'https://camargohost.com.br')

	.setDescription('Aceitamos pagamento via Boleto, Cartão de Credito, Pix, Transferência Bancária, Deposito é PayPal!')

	.setThumbnail('https://camargohost.com.br/logo.png')
	.setFooter('CamargoHost - Serviços de Qualidade!', 'https://camargohost.com.br/logo.png');

const regras = new Discord.MessageEmbed()
	.setColor('#007bff')
	.setTitle('CamargoHost - Regras')
    .setAuthor('CamargoHost - Serviços de Hospedagem!', 'https://camargohost.com.br/logo.png', 'https://camargohost.com.br')

	.setDescription(`1. É proibido qualquer tipo de divulgação de serviços de Hospedagem, Streaming, VPS ou MTA. \n
                     2. É proibido qualquer iniciativa de discussão diante a ódio, na qual discrimine a imagem do próximo.\n
                     3. É proibido o uso contínuo de CAPS-LOCK.\n
                     4. É proibido qualquer ameaça ou chantagem.\n
                     5. É proibido a iniciativa de flood/spam.\n
                     6. É proibido qualquer desrespeito diante aos membros da equipe de moderação/administração.\n`)

	.setThumbnail('https://camargohost.com.br/logo.png')
	.setFooter('CamargoHost - Serviços de Qualidade!', 'https://camargohost.com.br/logo.png');


const abrirTicket = new Discord.MessageEmbed()
	.setColor('#007bff')
	.setTitle('CamargoHost - Abrir Ticket')
    .setAuthor('CamargoHost - Serviços de Hospedagem!', 'https://camargohost.com.br/logo.png', 'https://camargohost.com.br')

	.setDescription(`Caro Cliente,\n
                    Use **/open** para abrir seu ticket!
                    ou click no botão acima.\n \n`)

	.setThumbnail('https://camargohost.com.br/logo.png')
	.setFooter('CamargoHost - Serviços de Qualidade!', 'https://camargohost.com.br/logo.png');


const abrirSite = new Discord.MessageEmbed()
	.setColor('#007bff')
	.setTitle('CamargoHost - Nosso site!')
    .setAuthor('CamargoHost - Serviços de Hospedagem!', 'https://camargohost.com.br/logo.png', 'https://camargohost.com.br')
	.setDescription(`Acesse nosso [**website**](http://camargohost.com.br) ou digite https://www.camargohost.com.br \n\n
    **Todos os pedidos devem ser realizado através do nosso site!**
    **Não iremos nós responsabilizar por pedidos feitos em outros sites sem ser originalmente www.camargohost.com.br** \n`)
	.setThumbnail('https://camargohost.com.br/logo.png')
	.setFooter('CamargoHost - Serviços de Qualidade!', 'https://camargohost.com.br/logo.png');


const testgratis = new Discord.MessageEmbed()
	.setColor('#007bff')
	.setTitle('CamargoHost - Teste Grátis de 2 dias!')
    .setAuthor('CamargoHost - Serviços de Hospedagem!', 'https://camargohost.com.br/logo.png', 'https://camargohost.com.br')
	.setDescription(`
    Para solicitar você só precisar entrar nós link abaixo, não e permitido mais de 1 hospedagem free por conta!
    
    **Hospedagem MTA CA:** [Click Aqui](https://sac.camargohost.com.br/cart.php?a=add&pid=21) ou https://sac.camargohost.com.br/cart.php?a=add&pid=21 \n
    **Hospedagem MTA BR:** [Click Aqui](https://sac.camargohost.com.br/cart.php?a=add&pid=22) ou https://sac.camargohost.com.br/cart.php?a=add&pid=22 \n
    `)
	.setThumbnail('https://camargohost.com.br/logo.png')
	.setFooter('CamargoHost - Serviços de Qualidade!', 'https://camargohost.com.br/logo.png');


const atendimentofinalizado = new Discord.MessageEmbed()
	.setColor('#007bff')
	.setTitle('CamargoHost - Atendimento finalizado!')
    .setAuthor('CamargoHost - Serviços de Hospedagem!', 'https://camargohost.com.br/logo.png', 'https://camargohost.com.br')
	.setDescription(`Nossos Suportes estão indisponível no momento caso tiver algum problema acesse nosso [**website**](http://camargohost.com.br) ou digite https://www.camargohost.com.br \n\n
    \n
    **Assim que possivel atendimento estará disponível novamente!** \n`)
	.setThumbnail('https://camargohost.com.br/logo.png')
	.setFooter('CamargoHost - Serviços de Qualidade!', 'https://camargohost.com.br/logo.png');

const atendimentoIniciado = new Discord.MessageEmbed()
	.setColor('#007bff')
	.setTitle('CamargoHost - Atendimento Inicializado!')
    .setAuthor('CamargoHost - Serviços de Hospedagem!', 'https://camargohost.com.br/logo.png', 'https://camargohost.com.br')
	.setDescription(`Nossos Suportes estão disponível caso tiver algum problema acesse nosso [**website**](http://camargohost.com.br) ou digite https://www.camargohost.com.br \n\n
    \n
    \n`)
	.setThumbnail('https://camargohost.com.br/logo.png')
	.setFooter('CamargoHost - Serviços de Qualidade!', 'https://camargohost.com.br/logo.png');

client.on('message', msg => {
    let perms = msg.member.permissions;
    let has_kick = perms.has("KICK_MEMBERS");
    if(has_kick){
        if (msg.content === '!post-comprar') {
            msg.delete({timeout: 10});
            msg.channel.send(comoComprar);
        }

        if (msg.content === '!post-pagamento') {
            msg.delete({timeout: 10});
            msg.channel.send(pagamentos);
        }

        if (msg.content === '!post-regras') {
            msg.delete({timeout: 10});
            msg.channel.send(regras);
        }

        if (msg.content === '!post-abrirticket') {
            msg.delete({timeout: 10});
            msg.channel.send(abrirTicket);
        }

        if (msg.content === '!post-abrirsite') {
            msg.delete({timeout: 10});
            msg.channel.send(abrirSite);
        }

        if (msg.content === '!post-testgratis') {
            msg.delete({timeout: 10});
            msg.channel.send(testgratis);
        }

        if (msg.content === '!finalizaratendimento') {
            msg.delete({timeout: 10});
            msg.channel.send(atendimentofinalizado);
        }

        if (msg.content === '!iniciaratendimento') {
            msg.delete({timeout: 10});
            msg.channel.send(atendimentoIniciado);
        }
    }else{
        if (msg.content === '!post-comprar') {
            msg.reply("Você não tem permissão seu merdinha!")
        }

        if (msg.content === '!post-pagamento') {
            msg.reply("Você não tem permissão seu merdinha!")
        }

        if (msg.content === '!post-regras') {
            msg.reply("Você não tem permissão seu merdinha!")
        }

        if (msg.content === '!post-abrirticket') {
            msg.reply("Você não tem permissão seu merdinha!")
        }

        if (msg.content === '!post-abrirsite') {
            msg.reply("Você não tem permissão seu merdinha!")
        }

        if (msg.content === '!post-testgratis') {
            msg.reply("Você não tem permissão seu merdinha!")
        }
    }
  });

client.login(config.token);