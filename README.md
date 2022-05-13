# Entités, aggrégats, value objects

Le domaine du module Contract ne devrait contenir que des value objects étant donné qu'il est en lecture seule.
Mais pour des raisons pédagogiques, il a été pensé avec une racine d'aggrégat sur l'entité Contract.
Les modules Trainline et Booking, quant à eux, sont bien en lecture seule.
