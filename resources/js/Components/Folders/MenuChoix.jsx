import React, { useState } from 'react';

const MenuChoix = () => {
  const [afficherMenu, setAfficherMenu] = useState(false);
  const [choixSelectionne, setChoixSelectionne] = useState(null);
  // Fonction pour afficher le menu
  const afficherMenuChoix = () => {
    setAfficherMenu(true);
  };

  // Fonction pour sélectionner un choix
  const selectionnerChoix = (choix) => {
    setChoixSelectionne(choix);
    setAfficherMenu(false);
  };

  return (
    <div>
      <button onClick={afficherMenuChoix}>New</button>

      {/* Affichage conditionnel du menu */}
      {afficherMenu && (
        <div className="menu-choix">
          {/* Liste des choix */}
          <div onClick={() => selectionnerChoix('telecharger')}>
            Télécharger un fichier
          </div>
          <div onClick={() => selectionnerChoix('dossier')}>
            Créer un nouveau dossier
          </div>
          <div onClick={() => selectionnerChoix('nouveau')}>
            Créer un nouveau document
          </div>
        </div>
      )}

      {/* Affichage du choix sélectionné */}
      {choixSelectionne && (
        <div>
          Vous avez sélectionné : {choixSelectionne}
        </div>
      )}
    </div>
  );
};

export default MenuChoix;
