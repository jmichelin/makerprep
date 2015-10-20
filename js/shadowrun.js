/*
Help Shadowrun not be so slow!
*/

function calcAttackerDicePool() {
  //alert(document.querySelector('#attackerDicePoolBadge').textContent);
  //agility + weapon skill + smartLinkBonus + - woundModifier - if (recoilModifier > 0)
  //document.querySelector('#number3MadLibReplace').textContent = document.getElementById("number3").value;
  var attackerDicePool;
  var agility = parseInt(document.getElementById("agility").value);
  attackerDicePool += agility;
  alert(agility + " " + typeof(agility));
  //attackerDicePool = agility;
  var weaponSkill = parseInt(document.getElementById("weaponSkill").value);
  attackerDicePool += weaponSkill;
  alert(weaponSkill + " " + typeof(weaponSkill));
  //var smartLinkBonus = parseInt(document.getElementById("smartLinkBonus").value);
  //var woundModifier = parseInt(document.getElementById("woundModifier").value);
  //var recoilModifier = parseInt(document.getElementById("recoilModifier").value);
  //attackerDicePool = agility + weaponSkill;// + weaponSkill;// + smartLinkBonus - woundModifier;
  document.querySelector('#attackerDicePoolBadge').textContent = attackerDicePool;
}
