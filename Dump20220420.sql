CREATE DATABASE  IF NOT EXISTS `sistema_mensagensdasorte` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sistema_mensagensdasorte`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: sistema_mensagensdasorte
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(45) NOT NULL,
  `CPF` varchar(45) NOT NULL,
  `Acesso` varchar(45) NOT NULL DEFAULT 'ADMIN',
  PRIMARY KEY (`id`),
  UNIQUE KEY `CPF_UNIQUE` (`CPF`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colaborador`
--

DROP TABLE IF EXISTS `colaborador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colaborador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(155) NOT NULL,
  `CPF` char(11) NOT NULL,
  `Acesso` varchar(45) NOT NULL DEFAULT 'colaborador',
  `Equipe_id` int NOT NULL,
  `Mensagem_Temporaria_id` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `CPF_UNIQUE` (`CPF`),
  KEY `fk_Colaborador_Equipe1_idx` (`Equipe_id`),
  KEY `fk_Colaborador_Mensagem_idx` (`Mensagem_Temporaria_id`),
  CONSTRAINT `fk_Colaborador_Equipe1` FOREIGN KEY (`Equipe_id`) REFERENCES `equipe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colaborador`
--

LOCK TABLES `colaborador` WRITE;
/*!40000 ALTER TABLE `colaborador` DISABLE KEYS */;
INSERT INTO `colaborador` VALUES (1,'ze','12345901','colaborador',1,'1'),(2,'Kaique','12345678910','colaborador',1,'1'),(3,'Kaique','02154026699','colaborador',1,'1'),(11,'Kaique','02154026619','colaborador',1,'1');
/*!40000 ALTER TABLE `colaborador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipe`
--

DROP TABLE IF EXISTS `equipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(145) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Nome_UNIQUE` (`Nome`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipe`
--

LOCK TABLES `equipe` WRITE;
/*!40000 ALTER TABLE `equipe` DISABLE KEYS */;
INSERT INTO `equipe` VALUES (2,'BATOLATO'),(1,'ORIGEM');
/*!40000 ALTER TABLE `equipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lider`
--

DROP TABLE IF EXISTS `lider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lider` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(155) NOT NULL,
  `CPF` char(11) NOT NULL,
  `Acesso` varchar(45) NOT NULL DEFAULT 'Lider',
  `Equipe_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `CPF_UNIQUE` (`CPF`),
  KEY `fk_Lider_Equipe_idx` (`Equipe_id`),
  CONSTRAINT `fk_Lider_Equipe` FOREIGN KEY (`Equipe_id`) REFERENCES `equipe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lider`
--

LOCK TABLES `lider` WRITE;
/*!40000 ALTER TABLE `lider` DISABLE KEYS */;
INSERT INTO `lider` VALUES (1,'Kaique','12345678910','Lider',1),(2,'ze','02154026699','Lider',1);
/*!40000 ALTER TABLE `lider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensagens`
--

DROP TABLE IF EXISTS `mensagens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensagens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mensagem` varchar(245) NOT NULL,
  `Equipe_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Mensagens_Equipe1_idx` (`Equipe_id`),
  CONSTRAINT `fk_Mensagens_Equipe1` FOREIGN KEY (`Equipe_id`) REFERENCES `equipe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensagens`
--

LOCK TABLES `mensagens` WRITE;
/*!40000 ALTER TABLE `mensagens` DISABLE KEYS */;
INSERT INTO `mensagens` VALUES (1,'ze',1),(4,'jh',1),(6,'ytryrty',1),(8,'3123123',1),(9,'3123123',1),(10,'3123123',1),(11,'3123123',1),(12,'gjjj',1),(13,'dasdasddasd',1),(14,'dasdasd',1),(15,'dasdasdasd',1),(16,'hjjk',1),(17,'TESTE',1);
/*!40000 ALTER TABLE `mensagens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensagens_temporaria`
--

DROP TABLE IF EXISTS `mensagens_temporaria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensagens_temporaria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mensagem` varchar(245) NOT NULL,
  `Equipe_id` int NOT NULL,
  `dataPublicacao` datetime NOT NULL,
  `Colaborador_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Mensagens_Temporaria_Equipe1_idx` (`Colaborador_id`,`Equipe_id`),
  KEY `equipe_idx` (`Equipe_id`),
  CONSTRAINT `colaborador` FOREIGN KEY (`Colaborador_id`) REFERENCES `colaborador` (`id`),
  CONSTRAINT `equipe` FOREIGN KEY (`Equipe_id`) REFERENCES `equipe` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensagens_temporaria`
--

LOCK TABLES `mensagens_temporaria` WRITE;
/*!40000 ALTER TABLE `mensagens_temporaria` DISABLE KEYS */;
INSERT INTO `mensagens_temporaria` VALUES (1,'catdasdasdasdatal',1,'2022-04-19 08:44:01',1),(2,'catdasdasdasdatal',1,'2022-04-19 08:44:46',2),(3,'catdasdasdasdatal',1,'2022-04-19 09:18:26',1);
/*!40000 ALTER TABLE `mensagens_temporaria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'sistema_mensagensdasorte'
--

--
-- Dumping routines for database 'sistema_mensagensdasorte'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-20 14:27:57
