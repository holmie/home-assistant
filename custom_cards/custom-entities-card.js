class CustomEntitiesCard extends HTMLElement {
  set hass(hass) {
      if (!this.content) {
        const card = document.createElement('ha-card');
        card.header = this.config.title;
        this.content = document.createElement('div');
        this.content.style.padding = '0 16px 16px';
        card.appendChild(this.content);
        this.appendChild(card);
      }

      const entities = this.config.entities;

      var html = "<table style='width: 100%;'>";

      $.each(entities, function (idx, entity) {
          var state = hass.states[entity.entity];
          var stateStr = state ? state.state : 'Ukjent';
          var icon;

          // Check if a custom icon is defined
          if (entity.icon == undefined) {
              icon = '/local/icons/unknown.png';
          } else {
              icon = '/local/icons/' + entity.icon;
          }

          // Check if we have a state rewrite going on
          if (entity.rewrite) {
            if (stateStr in entity.rewrite) {
                stateStr = entity.rewrite[stateStr];
            }
          }

          var color = '#000000';

          if (entity.colors) {
            if (stateStr in entity.colors) {
                color = entity.colors[stateStr];
            }
          }

          stateStr = '<span style="color: ' + color + ';">' + stateStr + '</span>';

          html = html + '<tr>';
          html = html + '<td><img src="' + icon + '" width="32" height="32"></td>';
          html = html + '<td><strong>' + entity.name + '</strong></td>';
          html = html + '<td>' + stateStr + '</td>';
          html = html + '</tr>';
      });

    this.content.innerHTML = html + "</table>";

  }

  setConfig(config) {
    if (!config.entities) {
        throw new Error('No entities defined');
    }
    this.config = config;
  }


  getCardSize() {
      return 3;
  }

}

customElements.define('custom-entities-card', CustomEntitiesCard);
