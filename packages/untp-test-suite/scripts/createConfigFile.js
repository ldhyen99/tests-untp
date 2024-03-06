import fs from 'fs';
import semver from 'semver';

const SCHEMAS_PATH = 'src/schemas';
const CONFIG_PATH = 'src/config';

const getPath = (path) => {
  const parentDir = process.cwd();
  return `${parentDir}/${path}`;
};

const getSchemaPath = () => getPath(SCHEMAS_PATH);
const getSchemaTypeName = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(getSchemaPath(), (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
};

const getLastestSchemaVersion = (type) => {
  const schemaPath = getSchemaPath();
  try {
    const schemaVersions = fs.readdirSync(`${schemaPath}/${String(type)}`);
    const latestVersion = semver.maxSatisfying(schemaVersions, '*');
    return latestVersion;
  } catch (err) {
    console.error(err);
    return '';
  }
};

const mapTypesAndVersions = async () => {
  try {
    const types = await getSchemaTypeName();

    const mapped = types.map((type) => ({
      type: type,
      version: getLastestSchemaVersion(type),
      dataPath: '',
    }));

    return mapped;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getConfigPath = () => getPath(CONFIG_PATH);

/**
 * Create a config file with the latest schema versions
 */
const createConfigFile = async () => {
  const config = await mapTypesAndVersions();
  const configData = JSON.stringify(config, null, 2);
  return new Promise((resolve, reject) => {
    fs.writeFile(`${getConfigPath()}/credentials.json`, configData, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

createConfigFile()
  .then(() => {
    console.log('Config file created successfully!');
  })
  .catch(() => {
    throw new Error('Error creating config file');
  });

export { createConfigFile };
