const fc1 =
    'кафедра контроля качества и испытания вооружения, военной и специальной техники;\nкафедра космических аппаратов и средств межорбитальной транспортировки;\nкафедра конструкций ракет-носителей;\nкафедра стартовых и технических комплексов;\nкафедра заправочного оборудования;\nкафедра навигационного-баллистического обеспечения применения космических средств и теории полета летательных аппаратов';
const fc2 =
    'Кафедра автономных систем управления;\nКафедра бортового электрооборудования и энергетических систем летательных аппаратов;\nКафедра управления организационно-техническими системами космического назначения;\nКафедра информационно-вычислительных систем и сетей;\nКафедра бортовых информационных и измерительных комплексов;\nКафедра автоматизированных систем подготовки и пуска ракет космического назначения.\nКафедра математического и программного обеспечения.';
const fc3 =
    'кафедра передающих, антенно-фидерных устройств и средств СЕВ;\nкафедра космических радиотехнических систем;\nкафедра космической радиолокации и радионавигации;\nкафедра телеметрических систем и комплексной обработки информации;\nкафедра систем и средств радиоэлектронной борьбы космического назначения;\nкафедра сетей и систем связи космических комплексов;\nкафедра приемных устройств и радиоавтоматики.';
const fc4 =
    'кафедра инженерного обеспечения и маскировки;\nкафедра специальных сооружений ракетно-космических комплексов;\nкафедра систем жизнеобеспечения объектов наземной космической инфраструктуры;\nкафедра энергоснабжения объектов наземной космической инфраструктуры.';
const fc5 =
    'кафедра оптико-электронных средств контроля;\nкафедра технологий и средств геофизического обеспечения;\nкафедра технических средств комплексного контроля ракетно-космических объектов;\nкафедра космического радиоэлектронного контроля.';
const fc6 =
    'кафедра систем сбора и обработки информации;\nкафедра инженерного анализа;\nкафедра информационно-аналитической работы.';
const fc7 =
    'кафедра топогеодезического обеспечения;\nкафедра картографии;\nкафедра высшей геодезии;\nкафедра фототопографии и фотограмметрии.';
const fc8 =
    'применение и эксплуатация средств предупреждения о ракетном нападении;\nприменение и эксплуатация средств противоракетной обороны;\nприменение и эксплуатация средств противокосмической обороны и контроля космического пространства.';
const fc9 =
    'кафедра системного анализа и математического обеспечения автоматизированных систем управления (войсками);\nкафедра технологий и средств технического обеспечения и эксплуатации автоматизированных систем управления (войсками);\nкафедра технологий и средств комплексной обработки и передачи информации в автоматизированных системах управления (войсками);\nкафедра автоматизированных систем управления космических комплексов;\nпрограммно-алгоритмическое обеспечения автоматизированных систем управления ракетно-космической обороны;\nметрологического обеспечения вооружения, военной и специальной техники.';

function toSentenceCase(str) {
    return str.charAt(0).toUpperCase().concat(str.slice(1).toLowerCase());
}

const faculties = [
    {
        label: toSentenceCase('ФАКУЛЬТЕТ КОНСТРУКЦИИ ЛЕТАТЕЛЬНЫХ АППАРАТОВ'),
        data: toSentenceCase('ФАКУЛЬТЕТ КОНСТРУКЦИИ ЛЕТАТЕЛЬНЫХ АППАРАТОВ'),
        children: fc1.split(';\n').map((fac, index) => ({
            label: toSentenceCase(fac),
            data: toSentenceCase(fac),
            key: `0-${index.toString()}`,
        })),
    },
    {
        label: toSentenceCase('ФАКУЛЬТЕТ СИСТЕМ УПРАВЛЕНИЯ РАКЕТНО-КОСМИЧЕСКИХ КОМПЛЕКСОВ'),
        data: toSentenceCase('ФАКУЛЬТЕТ СИСТЕМ УПРАВЛЕНИЯ РАКЕТНО-КОСМИЧЕСКИХ КОМПЛЕКСОВ'),
        children: fc2.split(';\n').map((fac, index) => ({
            label: toSentenceCase(fac),
            data: toSentenceCase(fac),
            key: `1-${index.toString()}`,
        })),
    },
    {
        label: toSentenceCase('ФАКУЛЬТЕТ РАДИОЭЛЕКТРОННЫХ СИСТЕМ КОСМИЧЕСКИХ КОМПЛЕКСОВ'),
        data: toSentenceCase('ФАКУЛЬТЕТ РАДИОЭЛЕКТРОННЫХ СИСТЕМ КОСМИЧЕСКИХ КОМПЛЕКСОВ'),
        children: fc3.split(';\n').map((fac, index) => ({
            label: toSentenceCase(fac),
            data: toSentenceCase(fac),
            key: `2-${index.toString()}`,
        })),
    },
    {
        label: toSentenceCase('ФАКУЛЬТЕТ ИНЖЕНЕРНОГО И ЭЛЕКТРОМЕХАНИЧЕСКОГО ОБЕСПЕЧЕНИЯ'),
        data: toSentenceCase('ФАКУЛЬТЕТ ИНЖЕНЕРНОГО И ЭЛЕКТРОМЕХАНИЧЕСКОГО ОБЕСПЕЧЕНИЯ'),
        children: fc4.split(';\n').map((fac, index) => ({
            label: toSentenceCase(fac),
            data: toSentenceCase(fac),
            key: `3-${index.toString()}`,
        })),
    },
    {
        label: toSentenceCase('ФАКУЛЬТЕТ СБОРА И ОБРАБОТКИ ИНФОРМАЦИИ'),
        data: toSentenceCase('ФАКУЛЬТЕТ СБОРА И ОБРАБОТКИ ИНФОРМАЦИИ'),
        children: fc5.split(';\n').map((fac, index) => ({
            label: toSentenceCase(fac),
            data: toSentenceCase(fac),
            key: `4-${index.toString()}`,
        })),
    },
    {
        label: toSentenceCase('ФАКУЛЬТЕТ СПЕЦИАЛЬНЫХ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ'),
        data: toSentenceCase('ФАКУЛЬТЕТ СПЕЦИАЛЬНЫХ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ'),
        children: fc6.split(';\n').map((fac, index) => ({
            label: toSentenceCase(fac),
            data: toSentenceCase(fac),
            key: `5-${index.toString()}`,
        })),
    },
    {
        label: toSentenceCase('ФАКУЛЬТЕТ ТОПОГЕОДЕЗИЧЕСКОГО ОБЕСПЕЧЕНИЯ И КАРТОГРАФИИ'),
        data: toSentenceCase('ФАКУЛЬТЕТ ТОПОГЕОДЕЗИЧЕСКОГО ОБЕСПЕЧЕНИЯ И КАРТОГРАФИИ'),
        children: fc7.split(';\n').map((fac, index) => ({
            label: toSentenceCase(fac),
            data: toSentenceCase(fac),
            key: `6-${index.toString()}`,
        })),
    },
    {
        label: toSentenceCase('ФАКУЛЬТЕТ СРЕДСТВ РАКЕТНО-КОСМИЧЕСКОЙ ОБОРОНЫ'),
        data: toSentenceCase('ФАКУЛЬТЕТ СРЕДСТВ РАКЕТНО-КОСМИЧЕСКОЙ ОБОРОНЫ'),
        children: fc8.split(';\n').map((fac, index) => ({
            label: toSentenceCase(fac),
            data: toSentenceCase(fac),
            key: `7-${index.toString()}`,
        })),
    },
    {
        label: toSentenceCase('ФАКУЛЬТЕТ АВТОМАТИЗИРОВАННЫХ СИСТЕМ УПРАВЛЕНИЯ ВОЙСКАМИ'),
        data: toSentenceCase('ФАКУЛЬТЕТ АВТОМАТИЗИРОВАННЫХ СИСТЕМ УПРАВЛЕНИЯ ВОЙСКАМИ'),
        children: fc9.split(';\n').map((fac, index) => ({
            label: toSentenceCase(fac),
            data: toSentenceCase(fac),
            key: `8-${index.toString()}`,
        })),
    },
];

const fs = require('fs');
const path = require('path');

const main = () => {
    for (let i = 0; i < faculties.length; i += 1) {
        faculties[i].key = i.toString();
    }

    fs.writeFileSync(path.resolve(__dirname, './json/facs.json'), JSON.stringify(faculties));
};

main();
