-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 04-10-2021 a las 04:03:14
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `biotech`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` text NOT NULL,
  `subtitulo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `img_id`, `cuerpo`) VALUES
(1, 'Biotecnología en Argentina y una nueva reglamentación', 'Biotecnología tradicional y biotecnología moderna', NULL, 'La semana pasada se publicó en el Boletín Oficial una nueva reglamentación a la Ley 26.270 de Promoción del Desarrollo y Producción de la Biotecnología Moderna, sancionada en el 2007. La flamante norma persigue “lograr una efectiva aplicación” del marco de promoción inaugurado por la ley, dotándolo a su vez de mayor “celeridad, claridad y eficacia”.\r\n\r\nEl Decreto Reglamentario (Decreto 284/2021) reconoce que la biotecnología resulta ser una actividad clave para el desarrollo productivo de diversos sectores de la economía de Argentina. Asimismo, hace hincapié en la consolidación de dicha área a partir de la aplicación efectiva de las investigaciones del Sistema Nacional de Ciencia, Tecnología e Innovación, en los procesos y productos de las empresas del sector.'),
(2, 'Biotecnología Argentina: Persiguiendo el desarrollo económico', 'El nuevo milenio supone el inicio de una era signada por la convergencia entre la biotecnología y otras ramas como la nanotecnología, las ciencias cognitivas y de la información.', NULL, 'La biotecnología, entendida a partir de ahora como la “moderna”, es una disciplina que tiene efectos transversales en diversas industrias, observándose sus resultados en productos que forman parte de nuestra cotidianeidad como lácteos con probióticos, detergentes para la ropa, ciertos medicamentos, entre otros.\r\n\r\nEn lo que refiere a alimentos, la biotecnología representa una vía para su mejoramiento en más de un sentido. Las posibilidades varían desde la mutación de la genética de semillas para propiciar una mayor resistencia de los cultivos, hasta la creación de productos funcionales para una debida alimentación y nutrición. Estas variables no son menores, pues pueden contribuir a paliar el hambre y los déficits nutricionales padecidos por poblaciones en todo el mundo.\r\n\r\nEn relación a Argentina, se destacan avances relativamente recientes como los del Instituto Nacional de Tecnología Agropecuaria (INTA) en la modificación de un gen presente en el cultivo de la papa cuya enzima afecta los valores nutricionales del alimento. También, se resalta el desarrollo de Yogurito Escolar, un alimento probiótico con propiedades funcionales y benéficas para la salud de los/as niños/as en situación de vulnerabilidad. Yogurito Escolar fue el resultado de investigaciones llevadas a cabo por el Centro de Referencia para Lactobacilos (CERELA de CONICET), un instituto prestigioso en la materia ubicado en la provincia de Tucumán.'),
(5, 'Genómica de microbios', 'En esta última década la genómica de microbios avanzó y traerá beneficios a la humanidad a la hora de derrotar a los macroorganismos superresistentes que es de gran preocupación sanitaria a nivel mundial', NULL, 'jadhkajsjalhfajhsfsjfhaldfjhlasdjfhalsdjkfhasldfh  '),
(6, 'La historia de los papers científicos', 'jasdasjd', NULL, 'kjasdjkalsdf');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'juan', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'juan1', '2d95666e2649fcfc6e3af75e09f5adb9'),
(3, 'nicole', '827ccb0eea8a706c4c34a16891f84e7b');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
