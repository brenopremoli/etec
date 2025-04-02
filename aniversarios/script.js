const birthdays = [
    { nome: "Adriana Aparecida Alves Martins", data: "1974-08-22" },
    { nome: "Altamir Antonio Macarini", data: "1960-06-08" },
    { nome: "Andreia Peratelli Fonseca", data: "1972-10-24" },
    { nome: "Andreia Salmazo Bertasso", data: "1981-01-23" },
    { nome: "Antonio Leonardo Pullig De Barros", data: "1981-10-05" },
    { nome: "Breno de Oliveira Premoli", data: "2003-07-27" },
    { nome: "Cibelle Roberta Sena Santos", data: "1982-09-13" },
    { nome: "Claudemir Abril Pontes", data: "1969-12-23" },
    { nome: "Daniela Brambilla Ferro Oliveira", data: "1986-05-14" },
    { nome: "Delcimário Da Silva Nobreza", data: "1971-11-25" },
    { nome: "Dhiego Da Silva Saraiva", data: "1988-06-02" },
    { nome: "Edson Trevizan", data: "1961-08-27" },
    { nome: "Eduardo Urias Duarte", data: "1971-05-12" },
    { nome: "Elaine Cristina Ziemba", data: "1973-12-28" },
    { nome: "Eliana Maria Trevisan", data: "1956-08-15" },
    { nome: "Eliane Tayra Gushiken", data: "1983-09-12" },
    { nome: "Elisangelo Antunes da Cruz", data: "1973-02-25" },
    { nome: "Emerson Ferreira da Silva", data: "1988-02-28" },
    { nome: "Emile Matheus Rodrigues Cordeiro", data: "1998-05-19" },
    { nome: "Fabiana Aline Alves", data: "1986-08-25" },
    { nome: "Fernanda Quineli Alves Nagao", data: "1978-12-05" },
    { nome: "Filipe Retali Melo Freixo dos Santos", data: "1984-10-16" },
    { nome: "Flavio Claudino de Araujo", data: "1982-10-16" },
    { nome: "Francisco Alves da Luz", data: "1963-01-19" },
    { nome: "Gabriela Alves do Nascimento Silva", data: "1997-12-01" },
    { nome: "Gabriela Dias Furan", data: "1998-01-28" },
    { nome: "Gerusa Gomes Bonome", data: "1977-02-23" },
    { nome: "Gislaine de Oliveira Prodomo Costa", data: "1982-04-26" },
    { nome: "Hemilie Aparecida Caro Souza", data: "1984-09-27" },
    { nome: "Isabela Bolensenha Carrion", data: "2001-02-23" },
    { nome: "Ivani Soares de Pinho", data: "1969-10-10" },
    { nome: "Jacqueline Pereira dos Santos", data: "1986-10-14" },
    { nome: "João Luiz dal Ponte Filho", data: "1983-04-20" },
    { nome: "João Pucci Neto", data: "1978-07-07" },
    { nome: "Josinaldo Macelino de Sousa", data: "1987-06-22" },
    { nome: "Juliano dos Santos Miola", data: "1976-01-11" },
    { nome: "Juliano Nicoluci Garcia", data: "1977-03-16" },
    { nome: "Leandro Nieves Ribeiro", data: "1988-12-12" },
    { nome: "Leandro Rogerio dias", data: "1979-08-24" },
    { nome: "Letícia Silva de Jesus", data: "1982-04-20" },
    { nome: "Leticia Vieira Costa Crisostomo", data: "1983-10-20" },
    { nome: "Ligia Lilian Vergo", data: "1975-05-28" },
    { nome: "Luciane Lima Beckner Oliveira", data: "1969-12-02" },
    { nome: "Marcelo duarte", data: "1965-09-24" },
    { nome: "Marcelo Salati", data: "1961-06-15" },
    { nome: "Marcos Aparecido Mutti", data: "1986-01-21" },
    { nome: "Marcos Jesus Boaretti Puerta", data: "1965-05-03" },
    { nome: "Marcos Rogerio Rodrigues da Silva", data: "1992-11-25" },
    { nome: "Maria Solange Caravina", data: "1968-05-17" },
    { nome: "Marília davoli Moreira Lopes", data: "1987-11-11" },
    { nome: "Matheus Monteiro de Lima", data: "1987-01-21" },
    { nome: "Maurilyn Jose de Lima Junior", data: "1982-10-11" },
    { nome: "Mayara Soares Cardoso", data: "1998-03-08" },
    { nome: "Nilda dos Santos Rosa", data: "1967-08-09" },
    { nome: "Noceilma Francisca de Lima Masuda", data: "1985-11-23" },
    { nome: "Oscar de Andrade Junior", data: "1960-12-18" },
    { nome: "Paula Ariadne Venerio Garcia Bomfim", data: "1983-01-23" },
    { nome: "Rafael Bento da Silva", data: "1992-08-11" },
    { nome: "Regina Cardoso Machado Casati", data: "1980-09-16" },
    { nome: "Reginaldo Calegari Tiziano", data: "1985-07-12" },
    { nome: "Renata Barbieri", data: "1979-09-20" },
    { nome: "Renata Pereira Prates", data: "1981-05-02" },
    { nome: "Renato de Araujo Ferreira", data: "1978-09-07" },
    { nome: "Rodrigo Bomfim", data: "1981-04-15" },
    { nome: "Sergio Eduardo Brugnolo de Souza", data: "1972-09-08" },
    { nome: "Sidinei de Oliveira Sousa", data: "1978-02-16" },
    { nome: "Silvano Vitor de Lima", data: "1980-01-09" },
    { nome: "Silverio Takao Hosomi", data: "1980-07-10" },
    { nome: "Thamires Caetano de Amorin", data: "1994-01-13" },
    { nome: "Thiago Araujo Ribeiro", data: "2002-01-23" },
    { nome: "Vinicius Fagundes Vargas", data: "1989-08-02" },
    { nome: "Wellington Johannes de Sá Santos", data: "1991-02-18" },
    { nome: "Wesley Aguiar Xavier Ferreira", data: "1985-10-30" }
];

function loadBirthdays() {
    const today = new Date().toISOString().slice(5, 10); // MM-DD
    const birthdayList = document.getElementById("birthday-list");
    birthdayList.innerHTML = "";

    const todaysBirthdays = birthdays.filter(b => b.data.slice(5, 10) === today);

    if (todaysBirthdays.length > 0) {
        todaysBirthdays.forEach(person => {
            const div = document.createElement("div");
            div.className = "birthday";
            div.textContent = `${person.nome} 🎂`;
            birthdayList.appendChild(div);
        });
    } else {
        birthdayList.textContent = "Nenhum aniversariante hoje!";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadBirthdays();
});
