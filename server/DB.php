<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
class DBClass {
    private $server = "localhost";
    private $userName = "root";
    private $userPassword = "";
    private $dbName = "Heroes";
    
    private $link;
    
    public function __construct() {
        $this->link = 
            mysqli_connect(
                $this->server, 
                $this->userName, 
                $this->userPassword,
                $this->dbName);
    }

    function __destruct() {
        mysqli_close($this->link);
    }

    function getHeroes() {
        $heroes = [];
        $query = "SELECT * FROM Hero";                
        $result = mysqli_query($this->link, $query);                
        while ($row = $result->fetch_assoc()) {
            $heroes[] =  $row;                              
        }
        return $heroes;
    }

    function getHeroById($heroID) {
        $hero = [];
        $query = "SELECT * FROM Hero WHERE ID = $heroID ";                
        $result = mysqli_query($this->link, $query);                
        while ($row = $result->fetch_assoc()) {
            $hero[] =  $row;                              
        }
        return $hero;
    }

    function getAttributeByHero($heroID) {
        $attributes = [];
        $query = "SELECT * FROM Attribute WHERE HeroID = $heroID ";                
        $result = mysqli_query($this->link, $query);                
        while ($row = $result->fetch_assoc()) {
            $attributes[] =  $row;                              
        }
        return $attributes;
    }

    function getDiffByHero($heroID) {
        $diff = "";
        $query = "
            SELECT `Title` FROM Difficult
            JOIN Hero ON Hero.DifficultID=Difficult.ID
            WHERE Hero.ID = $heroID";                
        $result = mysqli_query($this->link, $query); 
        $diff = $result->fetch_assoc();
        return $diff;
    }

    function getTypeByHero($heroID) {
        $type = "";
        $query = "
            SELECT `Titile` FROM HeroType
            JOIN Hero ON Hero.HeroTypeID=HeroType.ID
            WHERE Hero.ID = $heroID";                
        $result = mysqli_query($this->link, $query); 
        $type = $result->fetch_assoc();
        return $type;   
    }

    function getAttackTypeByHero($heroID) {
        $attackType = "";
        $query = "
            SELECT `Title` FROM AttackType
            JOIN Hero ON Hero.AttackTypeID=AttackType.ID
            WHERE Hero.ID = $heroID";                
        $result = mysqli_query($this->link, $query); 
        $attackType = $result->fetch_assoc();
        return $attackType;  
    }

    function getAbilityByHero($heroID) {
        $abilitys = [];
        $query = "SELECT * FROM Ability WHERE HeroID = $heroID ";                
        $result = mysqli_query($this->link, $query);                
        while ($row = $result->fetch_assoc()) {
            $abilitys[] =  $row;                              
        }
        return $abilitys;   
    }

    function getParamByHero($heroID) {
        $params = [];
        $query = "SELECT * FROM Params WHERE HeroID = $heroID ";                
        $result = mysqli_query($this->link, $query);                
        while ($row = $result->fetch_assoc()) {
            $params[] =  $row;                              
        }
        return $params;  
    }

    function getSpecByHero($heroID) {
        $spec = [];
        $query = "SELECT * FROM Specialization WHERE HeroID = $heroID ";                
        $result = mysqli_query($this->link, $query);                
        while ($row = $result->fetch_assoc()) {
            $spec[] =  $row;                              
        }
        return $spec;  
    }

    function getTalantByHero($heroID) {
        $talant = [];
        $query = "SELECT * FROM Talant WHERE HeroID = $heroID ";                
        $result = mysqli_query($this->link, $query);                
        while ($row = $result->fetch_assoc()) {
            $talant[] =  $row;                              
        }
        return $talant; 
    }
}

?>