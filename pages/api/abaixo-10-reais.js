import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  try {
    const directory = path.join(process.cwd(), 'json');
    const file = await fs.readFile(directory + '/abaixo-10-reais.json', 'utf8');
    res.status(200).send(file);
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' });
  }
}
