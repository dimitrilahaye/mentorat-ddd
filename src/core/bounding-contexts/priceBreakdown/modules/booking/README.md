# module Booking

## Notes

Ce module en est lecture seule.
Cela dit, je veux que la finalisation d'un Booking déclenche la construction d'un PriceBreakdown.
Donc il me faut un event qui vient de quelque part.
Pour garder l'aspect pédagogique, le domaine de ce module s'articulera donc autour d'un aggrégat dont la racine sera une entité Booking.
Celle-ci aura la méthode finish qui déclenchera l'event pour créer le PriceBreakdown.
