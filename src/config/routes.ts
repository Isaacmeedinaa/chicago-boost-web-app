import express, { Express } from "express";

export const routes = (app: Express) => {
  app.use(express.json());
};
