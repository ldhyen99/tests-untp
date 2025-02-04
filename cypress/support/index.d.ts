interface IssueChainable {
  verifyAppConfig(): Cypress.Chainable<void>;
  generateWorkflow(
    page: string,
    workflowName: string,
    schemaName: string,
    fileName: string,
    configPath: string,
    successMessage?: string,
  ): Cypress.Chainable<void>;
}

declare namespace Cypress {
  interface Chainable<Subject = any> extends IssueChainable {
    loadAppConfig(): Chainable<Record<string, any>>;
    navigateTo(page: string): Chainable<void>;
    interceptAPI(method: string, url: string, alias: string): Chainable<void>;
    waitForAPIResponse(alias: string, expectedStatus: number): Chainable<void>;
    verifySuccessToast(successMessage: string): Chainable<JQuery<HTMLElement>>;
    writeToFile(fileName: string, data: any): Chainable<void>;
    verifyLinkType(url: string): Chainable<any>;
    runShellScript(scriptPath: string): Chainable<string>;
    deleteFile(filePath: string): Chainable<boolean>;
  }
}
