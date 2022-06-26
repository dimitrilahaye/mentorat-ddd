import CommissionDistribution from "./../src/core/bounding-contexts/priceBreakdown/modules/contract/domain/Contract/commissionDistribution";
import RoutePlace from "./../src/core/bounding-contexts/priceBreakdown/modules/booking/domain/Booking/Route/RoutePlace";
import Booking from "../src/core/bounding-contexts/priceBreakdown/modules/booking/domain/Booking/Booking";
import Buyer from "../src/core/bounding-contexts/priceBreakdown/modules/booking/domain/Booking/Buyer";
import Discount from "../src/core/bounding-contexts/priceBreakdown/modules/contract/domain/Contract/discount";
import ArrivalStation from "../src/core/bounding-contexts/priceBreakdown/modules/trainline/domain/Trainline/arrivalStation";
import DepartureStation from "../src/core/bounding-contexts/priceBreakdown/modules/trainline/domain/Trainline/departureStation";
import TrainLine from "../src/core/bounding-contexts/priceBreakdown/modules/trainline/domain/Trainline/trainLine";
import Route from "../src/core/bounding-contexts/priceBreakdown/modules/booking/domain/Booking/Route/Route";
import Traveler from "../src/core/bounding-contexts/priceBreakdown/modules/booking/domain/Booking/Route/Traveler";
import Contract from "../src/core/bounding-contexts/priceBreakdown/modules/contract/domain/Contract/contract";
import Agency from "../src/core/bounding-contexts/priceBreakdown/modules/contract/domain/Contract/agency";
import Provider from "../src/core/bounding-contexts/priceBreakdown/modules/contract/domain/Contract/provider";
import Carrier from "../src/core/bounding-contexts/priceBreakdown/modules/contract/domain/Contract/carrier";
import PriceBreakdownFactory from "../src/core/bounding-contexts/priceBreakdown/modules/priceBreakdown/services/PriceBreakdownFactory";
import PriceBreakdownService from "../src/core/bounding-contexts/priceBreakdown/modules/priceBreakdown/services/PriceBreakdownService";
import InMemoryCurrencyService from "../src/core/bounding-contexts/priceBreakdown/modules/priceBreakdown/ports/currencyService/inMemoryCurrencyService";
import CarrierName from "../src/core/bounding-contexts/priceBreakdown/modules/contract/domain/Contract/carrierName";
import Currency from "../src/core/bounding-contexts/priceBreakdown/modules/contract/domain/Contract/currency";
import {
    PbBuyer,
    PbAgency,
    PbProvider,
    PbCarrier,
    PbActorInfo,
} from "../src/core/bounding-contexts/priceBreakdown/modules/priceBreakdown/domain/priceBreakdown/pbActor";
import {
    AgencyRoute,
    BuyerRoute,
    CarrierRoute,
    ProviderRoute,
} from "../src/core/bounding-contexts/priceBreakdown/modules/priceBreakdown/domain/priceBreakdown/pbRoute";

// todo(dim) make seeders for test data

// inputs for tests
const BUYER_FIRSTNAME = "John";
const BUYER_LASTNAME = "Doe";

const buyer = new Buyer({
    address: "An address",
    email: "anemail@free.fr",
    firstname: BUYER_FIRSTNAME,
    lastname: BUYER_LASTNAME,
});

const DISCOUNT_VALUE: number = 50;

const discount = new Discount({
    code: "code",
    value: DISCOUNT_VALUE,
}).output;

const AGENCY_NAME = "Agence";
const agency = new Agency({
    agencyCurrency: "euro",
    agencyName: AGENCY_NAME,
});

const PROVIDER_NAME = "Provider";
const provider = new Provider({
    providerCurrency: "euro",
    providerName: PROVIDER_NAME,
});

const CARRIER1_NAME = new CarrierName("Carrier1");
const carrier1 = new Carrier({
    carrierCurrency: new Currency("dollars"),
    carrierName: CARRIER1_NAME,
});

const COMMD1_AGENCY = 20;
const COMMD1_PROVIDER = 10;
const commd1 = new CommissionDistribution({
    agencyCommissionDistribution: COMMD1_AGENCY,
    providerCommissionDistribution: COMMD1_PROVIDER,
});
const contract1 = new Contract({
    agency,
    carrier: carrier1,
    provider,
    commissionDistribution: commd1,
});

const CARRIER2_NAME = new CarrierName("Carrier2");
const carrier2 = new Carrier({
    carrierCurrency: new Currency("roubles"),
    carrierName: CARRIER2_NAME,
});

const COMMD2_AGENCY = 20;
const COMMD2_PROVIDER = 10;
const commd2 = new CommissionDistribution({
    agencyCommissionDistribution: COMMD2_AGENCY,
    providerCommissionDistribution: COMMD2_PROVIDER,
});
const contract2 = new Contract({
    agency,
    carrier: carrier2,
    provider,
    commissionDistribution: commd2,
});

const DEPARTURE1_LOCATION = "Rennes";
const DEPARTURE1_NAME = "Gare de Rennes";
const departure1 = new DepartureStation({
    location: DEPARTURE1_LOCATION,
    name: DEPARTURE1_NAME,
});

const ARRIVAL1_LOCATION = "Nantes";
const ARRIVAL1_NAME = "Gare de Nantes";
const arrival1 = new ArrivalStation({
    location: ARRIVAL1_LOCATION,
    name: ARRIVAL1_NAME,
});

const TRAINLINE1_CARRIERPRICE = 100;
const TRAINLINE1_COMM = 20;
const trainline1 = new TrainLine({
    arrival: arrival1,
    departure: departure1,
    carrierPrice: TRAINLINE1_CARRIERPRICE,
    commission: TRAINLINE1_COMM,
});

const DATE_DEPARTURE_ROUTE_1 = new Date("2022-01-01 12:00");
const DATE_ARRIVAL_ROUTE_1 = new Date("2022-01-01 13:00");
const departureRoutePlace1 = new RoutePlace(DATE_DEPARTURE_ROUTE_1);
const arrivalRoutePlace1 = new RoutePlace(DATE_ARRIVAL_ROUTE_1);

const ROUTE1_ID = "id-route-1";
const TRAVELER1_FIRSTNAME = "Traveler-firstname-1";
const TRAVELER1_LASTNAME = "Traveler-lastname-1";
const route1 = new Route({
    arrivalDate: arrivalRoutePlace1,
    departureDate: departureRoutePlace1,
    identifier: ROUTE1_ID,
    trainline: trainline1,
    traveler: new Traveler({
        firstname: TRAVELER1_FIRSTNAME,
        lastname: TRAVELER1_LASTNAME,
    }),
    contract: contract1.output,
});

const DEPARTURE2_LOCATION = "Paris";
const DEPARTURE2_NAME = "Gare de Paris";
const departure2 = new DepartureStation({
    location: DEPARTURE2_LOCATION,
    name: DEPARTURE2_NAME,
});

const ARRIVAL2_LOCATION = "Lilles";
const ARRIVAL2_NAME = "Gare de Lilles";
const arrival2 = new ArrivalStation({
    location: ARRIVAL2_LOCATION,
    name: ARRIVAL2_NAME,
});

const TRAINLINE2_CARRIERPRICE = 200;
const TRAINLINE2_COMM = 10;
const trainline2 = new TrainLine({
    arrival: arrival2,
    departure: departure2,
    carrierPrice: TRAINLINE2_CARRIERPRICE,
    commission: TRAINLINE2_COMM,
});

const DATE_DEPARTURE_ROUTE_2 = new Date("2022-01-01 12:00");
const DATE_ARRIVAL_ROUTE_2 = new Date("2022-01-01 13:00");
const departureRoutePlace2 = new RoutePlace(DATE_DEPARTURE_ROUTE_2);
const arrivalRoutePlace2 = new RoutePlace(DATE_ARRIVAL_ROUTE_2);

const ROUTE2_ID = "id-route-2";
const TRAVELER2_FIRSTNAME = "Traveler-firstname-2";
const TRAVELER2_LASTNAME = "Traveler-lastname-2";
const route2 = new Route({
    arrivalDate: arrivalRoutePlace2,
    departureDate: departureRoutePlace2,
    identifier: ROUTE2_ID,
    trainline: trainline2,
    traveler: new Traveler({
        firstname: TRAVELER2_FIRSTNAME,
        lastname: TRAVELER2_LASTNAME,
    }),
    contract: contract2.output,
});

describe("Given a booking", () => {
    const BOOKING = new Booking({
        provider,
        agency,
        buyer,
        routes: [route1, route2],
        discount: discount,
    });
    const factory = new PriceBreakdownFactory();
    const currencyService = new InMemoryCurrencyService();
    const MOCKED_CURRENCY_CONVERSION = (value: number): number => {
        return value * 2.5;
    };
    currencyService.calculateCurrency = MOCKED_CURRENCY_CONVERSION;
    const service = new PriceBreakdownService(currencyService, factory);

    describe("When Buyer wants to have his price breakdown", () => {
        it("should receive the right data", async () => {
            const priceBreakdown = await service.getPriceBreakdown(BOOKING);
            const buyerPb = priceBreakdown.buyer;
            const EXPECTED_BUYER_PB: PbBuyer = new PbBuyer({
                info: new PbActorInfo({
                    name: `${BUYER_FIRSTNAME} ${BUYER_LASTNAME}`,
                }),
                routes: [
                    new BuyerRoute({
                        date: DATE_DEPARTURE_ROUTE_1,
                        price: MOCKED_CURRENCY_CONVERSION(TRAINLINE1_CARRIERPRICE),
                        trainline: `${DEPARTURE1_NAME} - ${ARRIVAL1_NAME}`,
                        traveler: `${TRAVELER1_FIRSTNAME} - ${TRAVELER1_LASTNAME}`,
                    }),
                    new BuyerRoute({
                        date: DATE_DEPARTURE_ROUTE_2,
                        price: MOCKED_CURRENCY_CONVERSION(TRAINLINE2_CARRIERPRICE),
                        trainline: `${DEPARTURE2_NAME} - ${ARRIVAL2_NAME}`,
                        traveler: `${TRAVELER2_FIRSTNAME} - ${TRAVELER2_LASTNAME}`,
                    }),
                ],
                discount: MOCKED_CURRENCY_CONVERSION(DISCOUNT_VALUE),
                total: MOCKED_CURRENCY_CONVERSION(
                    TRAINLINE1_CARRIERPRICE + TRAINLINE2_CARRIERPRICE - DISCOUNT_VALUE,
                ),
            });
            expect(buyerPb.snapshot).toStrictEqual(EXPECTED_BUYER_PB.snapshot);
        });
    });

    describe("When Agency wants to have his price breakdown", () => {
        it("should receive the right data", async () => {
            const priceBreakdown = await service.getPriceBreakdown(BOOKING);
            const agencyPb = priceBreakdown.agency;
            const EXPECTED_AGENCY_PB: PbAgency = new PbAgency({
                info: new PbActorInfo({
                    name: AGENCY_NAME,
                }),
                routes: [
                    new AgencyRoute({
                        date: DATE_DEPARTURE_ROUTE_1,
                        price: MOCKED_CURRENCY_CONVERSION(TRAINLINE1_CARRIERPRICE),
                        repComm: MOCKED_CURRENCY_CONVERSION(COMMD1_AGENCY),
                        trainline: `${DEPARTURE1_NAME} - ${ARRIVAL1_NAME}`,
                    }),
                    new AgencyRoute({
                        date: DATE_DEPARTURE_ROUTE_2,
                        price: MOCKED_CURRENCY_CONVERSION(TRAINLINE2_CARRIERPRICE),
                        repComm: MOCKED_CURRENCY_CONVERSION(COMMD2_AGENCY),
                        trainline: `${DEPARTURE2_NAME} - ${ARRIVAL2_NAME}`,
                    }),
                ],
                total: MOCKED_CURRENCY_CONVERSION(
                    TRAINLINE1_CARRIERPRICE +
                        TRAINLINE2_CARRIERPRICE +
                        COMMD1_AGENCY +
                        COMMD2_AGENCY,
                ),
            });
            expect(agencyPb.snapshot).toStrictEqual(EXPECTED_AGENCY_PB.snapshot);
        });
    });

    describe("When Provider wants to have his price breakdown", () => {
        it("should receive the right data", async () => {
            const priceBreakdown = await service.getPriceBreakdown(BOOKING);
            const providerPb = priceBreakdown.provider;
            const EXPECTED_PROVIER_PB: PbProvider = new PbProvider({
                info: new PbActorInfo({
                    name: PROVIDER_NAME,
                }),
                routes: [
                    new ProviderRoute({
                        date: DATE_DEPARTURE_ROUTE_1,
                        price: MOCKED_CURRENCY_CONVERSION(TRAINLINE1_CARRIERPRICE),
                        repComm: MOCKED_CURRENCY_CONVERSION(COMMD1_PROVIDER),
                        trainline: `${DEPARTURE1_NAME} - ${ARRIVAL1_NAME}`,
                    }),
                    new ProviderRoute({
                        date: DATE_DEPARTURE_ROUTE_2,
                        price: MOCKED_CURRENCY_CONVERSION(TRAINLINE2_CARRIERPRICE),
                        repComm: MOCKED_CURRENCY_CONVERSION(COMMD2_PROVIDER),
                        trainline: `${DEPARTURE2_NAME} - ${ARRIVAL2_NAME}`,
                    }),
                ],
                total: MOCKED_CURRENCY_CONVERSION(
                    TRAINLINE1_CARRIERPRICE +
                        TRAINLINE2_CARRIERPRICE +
                        COMMD1_PROVIDER +
                        COMMD2_PROVIDER,
                ),
            });
            expect(providerPb.snapshot).toStrictEqual(EXPECTED_PROVIER_PB.snapshot);
        });
    });

    describe("When carriers want to have their price breakdown", () => {
        it("should receive the right data", async () => {
            const priceBreakdown = await service.getPriceBreakdown(BOOKING);
            const carrierPbs = priceBreakdown.carriers;
            const EXPECTED_CARRIER_PBS: PbCarrier[] = [
                new PbCarrier({
                    info: new PbActorInfo({
                        name: CARRIER1_NAME.value,
                    }),
                    routes: [
                        new CarrierRoute({
                            date: DATE_DEPARTURE_ROUTE_1,
                            price: MOCKED_CURRENCY_CONVERSION(TRAINLINE1_CARRIERPRICE),
                            comm: MOCKED_CURRENCY_CONVERSION(TRAINLINE1_COMM),
                            trainline: `${DEPARTURE1_NAME} - ${ARRIVAL1_NAME}`,
                        }),
                    ],
                    total: MOCKED_CURRENCY_CONVERSION(
                        TRAINLINE1_CARRIERPRICE -
                            (TRAINLINE1_CARRIERPRICE * TRAINLINE1_COMM) / 100 -
                            DISCOUNT_VALUE,
                    ),
                }),
                new PbCarrier({
                    info: new PbActorInfo({
                        name: CARRIER2_NAME.value,
                    }),
                    routes: [
                        new CarrierRoute({
                            date: DATE_DEPARTURE_ROUTE_2,
                            price: MOCKED_CURRENCY_CONVERSION(TRAINLINE2_CARRIERPRICE),
                            comm: MOCKED_CURRENCY_CONVERSION(TRAINLINE2_COMM),
                            trainline: `${DEPARTURE2_NAME} - ${ARRIVAL2_NAME}`,
                        }),
                    ],
                    total: MOCKED_CURRENCY_CONVERSION(
                        TRAINLINE2_CARRIERPRICE -
                            (TRAINLINE2_CARRIERPRICE * TRAINLINE2_COMM) / 100 -
                            DISCOUNT_VALUE,
                    ),
                }),
            ];
            expect(carrierPbs.map((c) => c.snapshot)).toStrictEqual(
                EXPECTED_CARRIER_PBS.map((c) => c.snapshot),
            );
        });
    });
});
