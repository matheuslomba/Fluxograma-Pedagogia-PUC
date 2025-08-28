/* Number of total semesters: */
window.semesters = 8;

/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff", "#ff6347", "#9400d3", "#19dfda", "#ff7373", "#223bf6"];


window.courses = [
    [
    {name: "Hist. das Ideias e Práticas Pedagógicas", credits: 4, code: "EDU1764", semester: 1},
    {name: "Criança e Cultura", credits: 4, code: "EDU1774", semester: 1, requirements: []},
    {name: "Mídia, Tecnologias e Educação", credits: 4, code: "EDU1780", semester: 1, requirements: []},
    {name: "Análise e Produção do Texto Acadêmico", credits: 4, code: "LET1910", semester: 1, requirements: []},
    {name: "Optativa de Filosofia", credits: 4, code: "FIL0102", semester: 1, requirements: []},
    {name: "Optativa de Sociologia/História", credits: 4, code: "NGH0121", semester: 1, requirements: []},
    {name: "O Humano e o Fenômeno Religioso", credits: 4, code: "CRE1200", semester: 2, requirements: []},
    {name: "História da Educação no Brasil", credits: 4, code: "EDU1765", semester: 2, requirements: []},
    {name: "Psicologia Educacional I", credits: 4, code: "EDU1768", semester: 2, requirements: []},
    {name: "Pesquisa Educacional", credits: 4, code: "EDU1792", semester: 2, requirements: []},
    {name: "Teoria e Prática do Ensino da Língua Portuguesa I", credits: 4, code: "EDU1820", semester: 2, requirements: []},
    {name: "Teoria e Prática da Educação Matemática I", credits: 4, code: "EDU1822", semester: 2, requirements: []},
    {name: "Psicologia Educacional II", credits: 4, code: "EDU1769", semester: 3, requirements: []},
    {name: "Sociologia da Educação I", credits: 4, code: "EDU1770", semester: 3, requirements: []},
    {name: "Didática Geral", credits: 4, code: "EDU1775", semester: 3, requirements: []},
    {name: "Organização Escolar I", credits: 4, code: "EDU1781", semester: 3, requirements: []},
    {name: "Teoria e Prática do Ensino da Língua Portuguesa II", credits: 4, code: "EDU1821", semester: 3, requirements: [10]},
    {name: "Teoria e Prática da Educação Matemática II", credits: 4, code: "EDU1823", semester: 3, requirements: [11]},
    {name: "Política Educacional I", credits: 4, code: "EDU1766", semester: 4, requirements: []},
    {name: "Sociologia da Educação II", credits: 4, code: "EDU1771", semester: 4, requirements: [13]},
    {name: "Organização Escolar II", credits: 4, code: "EDU1782", semester: 4, requirements: [15]},
    {name: "Estágio Supervisionado em Gestão da Escola", credits: 4, code: "EDU1788", semester: 4, requirements: [15]},
    {name: "Teoria e Prática do Ensino  de Ciências Naturais I", credits: 4, code: "EDU1824", semester: 4, requirements: []},
    {name: "Teoria e Prática do Ensino de Ciências Sociais I", credits: 4, code: "EDU1826", semester: 4, requirements: []},
    {name: "Filosofia da Educação I", credits: 4, code: "EDU1762", semester: 5, requirements: []},
    {name: "Política Educacional II", credits: 4, code: "EDU1767", semester: 5, requirements: [18]},
    {name: "Prática de Ensino em Matérias Pedagógicas", credits: 5, code: "EDU1836", semester: 5, requirements: [14]},
    {name: "Currículo: questões teóricas e práticas", credits: 4, code: "EDU1808", semester: 5, requirements: []},
    {name: "Teoria e Prática do Ensino de Ciências Naturais II", credits: 4, code: "EDU1825", semester: 5, requirements: [27]},
    {name: "Teoria e Prática do Ensino de Ciências Sociais II", credits: 4, code: "EDU1827", semester: 5, requirements: [28]},
    {name: "Optativa de Cristianismo", credits: 4, code: "CRE0712", semester: 6, requirements: []},
    {name: "Antropologia e Educação", credits: 4, code: "EDU1760", semester: 6, requirements: []},
    {name: "Filosofia da Educação II", credits: 4, code: "EDU1763", semester: 6, requirements: []},
    {name: "Prática de Ensino em Escola Fundamental", credits: 5, code: "EDU1837", semester: 6, requirements: [14]},
    {name: "Multiculturalismo e Educação", credits: 4, code: "EDU1798", semester: 6, requirements: []},
    {name: "Avaliação da Aprendizagem", credits: 4, code: "EDU1817", semester: 6, requirements: []},
    {name: "Ética Cristã", credits: 2, code: "CRE1241", semester: 7, requirements: [30]},
    {name: "As Crianças e o Cotidiano da Educação Infantil", credits: 4, code: "EDU1772", semester: 7, requirements: []},
    {name: "Diversidade e Inclusão Educacional", credits: 4, code: "EDU1777", semester: 7, requirements: []},
    {name: "Estágio Supervisionado de Educação Infantil", credits: 4, code: "EDU1789", semester: 7, requirements: [1,37]},
    {name: "Análise e Interpretação de Dados Estatísticos", credits: 4, code: "EDU1807", semester: 7, requirements: []},
    {name: "Atividades Complementares", credits: 19, code: "ACP0900", semester: 7, requirements: []},
    {name: "Ética Socioambiental e Direitos Humanos", credits: 2, code: "CRE1275", semester: 8, requirements: [36]},
    {name: "Educação em Direitos Humanos", credits: 4, code: "EDU1776", semester: 8, requirements: []},
    {name: "Língua Brasileira de Sinais I", credits: 2, code: "LET1801", semester: 8, requirements: []},
    {name: "Optativas de Educação", credits: 8, code: "EDU0800", semester: 8, requirements: []},
    {name: "Eletiva dentro/fora do Depto", credits: 8, code: "ELL0900", semester: 8, requirements: []},
    {name: "Optativas de Extensão", credits: 4, code: "EXT0100", semester: 8, requirements: [], workload: 60, step: 1},
    ]
]
