declare -a URL_ARRAY=(
    "https://mhrise.kiranico.com/data/weapons?view=0"
    "https://mhrise.kiranico.com/data/weapons?view=1"
    "https://mhrise.kiranico.com/data/weapons?view=2"
    "https://mhrise.kiranico.com/data/weapons?view=3"
    "https://mhrise.kiranico.com/data/weapons?view=4"
    "https://mhrise.kiranico.com/data/weapons?view=5"
    "https://mhrise.kiranico.com/data/weapons?view=6"
    "https://mhrise.kiranico.com/data/weapons?view=7"
    "https://mhrise.kiranico.com/data/weapons?view=8"
    "https://mhrise.kiranico.com/data/weapons?view=9"
    "https://mhrise.kiranico.com/data/weapons?view=10"
    "https://mhrise.kiranico.com/data/weapons?view=11"
    "https://mhrise.kiranico.com/data/weapons?view=12"
    "https://mhrise.kiranico.com/data/weapons?view=13"
    "https://monsterhunterrise.wiki.fextralife.com/Head+Armor"
    "https://monsterhunterrise.wiki.fextralife.com/Chest+Armor"
    "https://monsterhunterrise.wiki.fextralife.com/Arms+Armor"
    "https://monsterhunterrise.wiki.fextralife.com/Waist+Armor"
    "https://monsterhunterrise.wiki.fextralife.com/Legs+Armor"
    "https://monsterhunterrise.wiki.fextralife.com/Materials"
    "https://monsterhunterrise.wiki.fextralife.com/Master+Rank+Materials"
    "https://monsterhunterrise.wiki.fextralife.com/Decorations"
    "https://monsterhunterrise.wiki.fextralife.com/Skills"
)

declare -a OUTFILE_ARRAY=(
    "./download_output/weapon/GreatSword.html"
    "./download_output/weapon/SwordAndShield.html"
    "./download_output/weapon/DualBlades.html"
    "./download_output/weapon/LongSword.html"
    "./download_output/weapon/Hammer.html"
    "./download_output/weapon/HuntingHorn.html"
    "./download_output/weapon/Lance.html"
    "./download_output/weapon/Gunlance.html"
    "./download_output/weapon/SwitchAxe.html"
    "./download_output/weapon/ChargeBlade.html"
    "./download_output/weapon/InsectGlaive.html"
    "./download_output/weapon/Bow.html"
    "./download_output/weapon/HeavyBowgun.html"
    "./download_output/weapon/LightBowgun.html"
    "./download_output/armor/head.html"
    "./download_output/armor/chest.html"
    "./download_output/armor/arms.html"
    "./download_output/armor/waist.html"
    "./download_output/armor/legs.html"
    "./download_output/materials.html"
    "./download_output/master_rank_materials.html"
    "./download_output/decorations.html"
    "./download_output/skills.html"
)

declare -i ARRAY_LIMIT=${#URL_ARRAY[@]}-1

for i in $(seq 0 $ARRAY_LIMIT)
do         
    URL="${URL_ARRAY[i]}"
    OUTFILE_NAME="${OUTFILE_ARRAY[i]}"    
    curl $URL -o $OUTFILE_NAME    
done
