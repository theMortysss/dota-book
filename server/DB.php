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
            // $row['Image'] = base64_encode($row['Image']);
            // $row['ImageBig'] = base64_encode($row['ImageBig']);
            $heroes[] =  $row;                              
        }
        return $heroes;
    }

    function getHeroById($heroID) {
        $hero = [];
        $query = "SELECT * FROM Hero WHERE ID = $heroID ";                
        $result = mysqli_query($this->link, $query); 
        $hero = $result->fetch_assoc();
        return $hero;                 
    }

    function getAttributeByHero($heroID) {
        $attributes = [];
        $query = "SELECT * FROM Attribute WHERE HeroID = $heroID ";                
        $result = mysqli_query($this->link, $query);
        $attributes = $result->fetch_assoc(); 
        return $attributes;               
        // while ($row = $result->fetch_assoc()) {
        //     $attributes[] =  $row;                              
        // }
        // return $attributes;
    }

    function getDiffByHero($heroID) {
        $diff = "";
        $query = "
            SELECT `Title` FROM Difficult
            JOIN Hero ON Hero.DifficultID=Difficult.dID
            WHERE Hero.ID = $heroID";                
        $result = mysqli_query($this->link, $query); 
        $diff = $result->fetch_assoc();
        return $diff;
    }

    function getTypeByHero($heroID) {
        $type = "";
        $query = "
            SELECT `htID`, `Titile` FROM HeroType
            JOIN Hero ON Hero.HeroTypeID=HeroType.htID
            WHERE Hero.ID = $heroID";                
        $result = mysqli_query($this->link, $query); 
        $type = $result->fetch_assoc();
        return $type;   
    }

    function getAttackTypeByHero($heroID) {
        $attackType = "";
        $query = "
            SELECT `atID`, `Title` FROM AttackType
            JOIN Hero ON Hero.AttackTypeID=AttackType.atID
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
            // $row['Image'] = base64_encode($row['Image']);
            $abilitys[] =  $row;                              
        }
        return $abilitys;   
    }

    function getParamByHero($heroID) {
        $params = [];
        $query = "SELECT * FROM Params WHERE HeroID = $heroID ";                
        $result = mysqli_query($this->link, $query);  
        $params = $result->fetch_assoc();
        return $params;                 
        // while ($row = $result->fetch_assoc()) {
        //     $params[] =  $row;                              
        // }
        // return $params;  
    }

    function getSpecByHero($heroID) {
        $spec = [];
        $query = "SELECT * FROM Specialization WHERE HeroID = $heroID ";                
        $result = mysqli_query($this->link, $query);  
        $spec = $result->fetch_assoc();
        return $spec;              
        // while ($row = $result->fetch_assoc()) {
        //     $spec[] =  $row;                              
        // }
        // return $spec;  
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


    function createHero($newHero) {
        // $query = "
        // INSERT INTO 
        // Hero 
        // (	
        //     Name,	
        //     Role,	
        //     Description,	
        //     AttackTypeID,	
        //     DifficultID,	
        //     HeroTypeID,	
        //     Image,	
        //     ImageBig
        // ) 
        // VALUES 
        // (
        //     '$newHero[1]',	
        //     '$newHero[2]',	
        //     '$newHero[3]',	
        //     '$newHero[4]',	
        //     '$newHero[5]',	
        //     '$newHero[6]',	
        //     '$newHero[55]',	
        //     '$newHero[56]'
        // )";
        
        // mysqli_query($this->link, $query);

        // $query = "INSERT INTO 
        // Ability 
        // (	
        //     HeroID,
        //     Ability,
        //     Description,
        //     Image
        // ) 
        // VALUES 
        // (
        //     '$newHero[0]',	
        //     '$newHero[7]',	
        //     '$newHero[8]',	
        //     '$newHero[15]'
        // )";
        
        // mysqli_query($this->link, $query);

        // $query = "INSERT INTO 
        // Ability 
        // (	
        //     HeroID,
        //     Ability,
        //     Description,
        //     Image
        // ) 
        // VALUES 
        // (
        //     '$newHero[0]',	
        //     '$newHero[9]',	
        //     '$newHero[10]',	
        //     '$newHero[16]'
        // )";
        
        // mysqli_query($this->link, $query);

        // $query = "INSERT INTO 
        // Ability 
        // (	
        //     HeroID,
        //     Ability,
        //     Description,
        //     Image
        // ) 
        // VALUES 
        // (
        //     '$newHero[0]',	
        //     '$newHero[11]',	
        //     '$newHero[12]',	
        //     '$newHero[17]'
        // )";
        
        // mysqli_query($this->link, $query);

        // $query = "INSERT INTO 
        // Ability 
        // (	
        //     HeroID,
        //     Ability,
        //     Description,
        //     Image
        // ) 
        // VALUES 
        // (
        //     '$newHero[0]',	
        //     '$newHero[13]',	
        //     '$newHero[14]',	
        //     '$newHero[18]'
        // )";
        
        // mysqli_query($this->link, $query);

        // $query = "INSERT INTO 
        // Attribute 
        // (	
        //     HeroID,	
        //     Strength,	
        //     StrengthInc,	
        //     Agility,	
        //     AgilityInc,	
        //     Intelligence,	
        //     IntelligenceInc,
        //     Health,	
        //     HealthInc,	
        //     Mana,	
        //     ManaInc	
        // ) 
        // VALUES 
        // (
        //     '$newHero[0]',	
        //     '$newHero[19]',	
        //     '$newHero[20]',	
        //     '$newHero[21]',
        //     '$newHero[22]',	
        //     '$newHero[23]',	
        //     '$newHero[24]',	
        //     '$newHero[25]',
        //     '$newHero[26]',	
        //     '$newHero[27]',	
        //     '$newHero[28]'
        // )";
        
        // mysqli_query($this->link, $query);


        $query = "
        INSERT INTO 
        Params 
        (	
            HeroID,	
            AttackValue,
            AttackDelay,	
            AttackRange,	
            AttackSpeed,	
            PhysProtection,	
            MagProtection,	
            Speed,	
            RotateSpeed,	
            Visibility
        ) 
        VALUES 
        (
            '$newHero[0]',	
            '$newHero[29]',	
            '$newHero[30]',	
            '$newHero[31]',
            '$newHero[32]',	
            '$newHero[33]',	
            '$newHero[34]',	
            '$newHero[35]',
            '$newHero[36]',	
            '$newHero[37]'
        )";

        mysqli_query($this->link, $query);


        $query = "
        INSERT INTO 
        Specialization 
        (	
            HeroID,	
            Core,	
            Support,	
            FastDamage,	
            Control,	
            Forest,	
            Durability,	
            Escape,	
            Siege,	
            Initiation
        ) 
        VALUES 
        (
            '$newHero[0]',	
            '$newHero[38]',	
            '$newHero[39]',	
            '$newHero[40]',
            '$newHero[41]',	
            '$newHero[42]',	
            '$newHero[43]',	
            '$newHero[44]',
            '$newHero[45]',
            '$newHero[46]'
        )";

        mysqli_query($this->link, $query);


        $query = "
        INSERT INTO 
        Talant 
        (	
            HeroID,	
            Talant
        ) 
        VALUES 
        (
            '$newHero[0]',	
            '$newHero[47]'
        )";

        mysqli_query($this->link, $query);

        $query = "
        INSERT INTO 
        Talant 
        (	
            HeroID,	
            Talant
        ) 
        VALUES 
        (
            '$newHero[0]',	
            '$newHero[48]'
        )";

        mysqli_query($this->link, $query);

        $query = "
        INSERT INTO 
        Talant 
        (	
            HeroID,	
            Talant
        ) 
        VALUES 
        (
            '$newHero[0]',	
            '$newHero[49]'
        )";

        mysqli_query($this->link, $query);

        $query = "
        INSERT INTO 
        Talant 
        (	
            HeroID,	
            Talant
        ) 
        VALUES 
        (
            '$newHero[0]',	
            '$newHero[50]'
        )";

        mysqli_query($this->link, $query);

        $query = "
        INSERT INTO 
        Talant 
        (	
            HeroID,	
            Talant
        ) 
        VALUES 
        (
            '$newHero[0]',	
            '$newHero[51]'
        )";

        mysqli_query($this->link, $query);

        $query = "
        INSERT INTO 
        Talant 
        (	
            HeroID,	
            Talant
        ) 
        VALUES 
        (
            '$newHero[0]',	
            '$newHero[52]'
        )";

        mysqli_query($this->link, $query);

        $query = "
        INSERT INTO 
        Talant 
        (	
            HeroID,	
            Talant
        ) 
        VALUES 
        (
            '$newHero[0]',	
            '$newHero[53]'
        )";

        mysqli_query($this->link, $query);

        $query = "
        INSERT INTO 
        Talant 
        (	
            HeroID,	
            Talant
        ) 
        VALUES 
        (
            '$newHero[0]',	
            '$newHero[54]'
        )";

        mysqli_query($this->link, $query);

    }

    function createImgInTestDB($imgData) {
        $query = "INSERT INTO `Test` (`Image`) VALUES ('$imgData')";
        mysqli_query($this->link, $query);
    }

    function getImage() {
        $img = [];
        $query = "SELECT Image FROM Test WHERE ID=22";
        $result = mysqli_query($this->link, $query); 

        while ($row = $result->fetch_assoc()) {
            // $row['Image'] = base64_encode($row['Image']);
            $img[] = $row;                           
        }
        return $img;
    }

}

?>