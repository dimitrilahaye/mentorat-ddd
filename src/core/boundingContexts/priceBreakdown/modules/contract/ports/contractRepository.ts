import Contract from "../domain/entities/contract";

export default interface ContractRepository {
    // dans les faits on devrait renvoyer un value object
    // car le contrat sera requis à l'extérieur de l'aggrégat Contract
    // et donc on ne peut modifier la référence de l'extérieur.
    // TODO: ajouter les args agencyId et carrierId (vo)
    // TODO: + généralement, ajouter les id dans les entités
    getConstractByAgencyAndCarrier(): Contract;

    // TODO: MANU je ne sais plus comment pourrait-on récupérer le contrat depuis le module Trainline
    // https://viewer.diagrams.net/?page-id=pt6Se_tUvXeLadXP1PDD&highlight=0000ff&edit=_blank&layers=1&nav=1&page-id=pt6Se_tUvXeLadXP1PDD#G1z4fm_wdGfCkWVOn2vbgdrpEKzWx28-Vm
}
