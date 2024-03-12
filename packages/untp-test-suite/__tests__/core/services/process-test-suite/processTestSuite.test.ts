import { resolve } from 'path';
import { processTestSuite } from '../../../../src/core/process-test-suite';
import { hasErrors } from '../../../../src/core/services/json-schema/validator.service';
import { readConfigFile, readFile } from '../../../../src/core/utils/common';
import { dynamicLoadingSchemaService } from '../../../../src/core/services/dynamic-loading-schemas/loadingSchema.service';

jest.mock('path', () => ({
  resolve: jest.fn(),
}));

jest.mock('../../../../src/core/services/json-schema/validator.service', () => ({
  hasErrors: jest.fn(),
}));

jest.mock('../../../../src/core/utils/common', () => ({
  readConfigFile: jest.fn().mockResolvedValue([]),
  readFile: jest.fn().mockResolvedValue({}),
}));

jest.mock('../../../../src/core/services/dynamic-loading-schemas/loadingSchema.service', () => ({
  dynamicLoadingSchemaService: jest.fn(),
}));

describe('processTestSuite', () => {
  it('should process the test suite and return an array of null', async () => {
    (readConfigFile as jest.Mock).mockResolvedValue({
      credentials: [
        {
          type: 'objectEvent',
          version: 'v0.0.1',
          dataPath: 'testPath',
        },
      ],
    });

    (dynamicLoadingSchemaService as jest.Mock).mockResolvedValue({
      type: 'object',
      additionalProperties: false,
      properties: {
        parentItem: {
          type: 'string',
          example: 'object',
          description:
            'The unique item identifier that is the result of this aggreation. Typcially a packaging ID used in shipments that represents a box/ pallet / container of contained items.',
        },
      },
    });

    (readFile as jest.Mock).mockResolvedValue({
      parentItem: {
        itemID: 'https://example.com/product/12345',
        name: 'Product A',
      },
    });

    (hasErrors as jest.Mock).mockReturnValue(null);

    const result = await processTestSuite();
    expect(result).toEqual([null]);
  });

  it('should process the test suite and return an array of errors', async () => {
    (readConfigFile as jest.Mock).mockResolvedValue({
      credentials: [
        {
          type: 'objectEvent',
          version: 'v0.0.1',
          dataPath: 'testPath',
        },
      ],
    });

    (dynamicLoadingSchemaService as jest.Mock).mockResolvedValue({
      type: 'object',
      additionalProperties: false,
      properties: {
        parentItem: {
          $ref: '#/$defs/Item',
          description:
            'The unique item identifier that is the result of this aggreation. Typcially a packaging ID used in shipments that represents a box/ pallet / container of contained items.',
        },
      },
    });

    (readFile as jest.Mock).mockResolvedValue({
      parentItem: {
        itemID: 'https://example.com/product/12345',
        name: 'Product A',
      },
    });

    (hasErrors as jest.Mock).mockReturnValue({
      errors: [
        {
          keyword: 'type',
          dataPath: '.parentItem',
          schemaPath: '#/$defs/Item/properties/itemID/type',
          params: {
            type: 'string',
          },
          message: 'should be string',
        },
      ],
    });

    const result = await processTestSuite();
    expect(result).toEqual([
      {
        errors: [
          {
            keyword: 'type',
            dataPath: '.parentItem',
            schemaPath: '#/$defs/Item/properties/itemID/type',
            params: {
              type: 'string',
            },
            message: 'should be string',
          },
        ],
      },
    ]);
  });
});
