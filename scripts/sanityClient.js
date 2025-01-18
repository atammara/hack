"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
const client_1 = require("@sanity/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.client = (0, client_1.createClient)({
    projectId: "8qkvq72u", // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2025-01-18', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: "skSrV40eoT2MnfVV6mf4HniEwBa97NqzHIUq6KDasvgPyRhfZdU0nqrvJcPsEgFP29ed8b1aKbKFagXYPqO38UNJylWGa40DhCZasL2kwxUUhhirHBA9kNontL5MlRNUaTPPQF9UZl1o9JcleihbNSCOMYnGVfEkMxqWqu6MyRZ89OD5883p",
});