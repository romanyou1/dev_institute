# L1VE.v2 (Front-only)

Site web responsive et dynamique (sans back-end) en HTML/CSS/JS.

## Lancer

Option simple:
- Ouvrir `index.html` dans le navigateur.

Option serveur local:
```bash
cd /Users/romanyouh1gmail.com/Desktop/taff/Cyber/Perso/Codex/L1VE/L1VE.v2
python3 -m http.server 5500
```
Puis ouvrir `http://localhost:5500`.

## Notes

- Les données sont persistées en local via `localStorage`.
- Les limites de plan (swipes/jour, inscriptions/mois, VIP) sont simulées côté front.
- Timezone de référence: Europe/Paris.
- Cartes interactives: Leaflet + OpenStreetMap (centrées Marseille).
- Dating: portraits photo-réalistes en encarts carrés.
- Amical/Pro: photos de lieux.
- Chats: chatbot contextuel qui répond sur lieu/date/coordonnées/limites/VIP.
