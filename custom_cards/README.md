Problem:

Entities card in home assistant very general.
I wanted custom rewrite of status:
 'home' => 'Hjemme', which means home in Norwegian (increase WAF)
 'home' => 'Online', for hubs and gateways (devices)
 
I wanted custom icons for the entities. (Xiaomi icon for the Aqara hub, Verisure icon for the verisure hub, etc.)
This is possible in the hass configuration, but requires reload/restart of hass.
I wanted custom coloring for entity states (Online => green, Offline => red, Hjemme = green, etc.)


