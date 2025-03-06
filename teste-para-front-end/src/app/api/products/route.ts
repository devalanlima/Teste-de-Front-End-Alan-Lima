import { Product } from "@/types/Product"

export async function GET(req: Request) {
  const data: Product[] = [
    { 
      id: 0, 
      productName: 'Mouse Gamer Sem Fio Logitech G Pro X Superlight 2 com Lightspeed, 32000 DPI, Sensor Hero 2, com Bateria Recarregável, Preto',
      imageURL: '/logitech/image.png',
      previousPrice: '1.529,49',
      price: '814,90',
      promo: true,
      info: 'à vista no PIX'
    },
    { 
      id: 1, 
      productName: 'Mouse Gamer Sem Fio Logitech G502 LIGHTSPEED RGB LIGHTSYNC, Ajuste Peso, 11 Botões, Recarregável, Compatível POWERPLAY',
      imageURL: '/logitech/image-2.png',
      previousPrice: '705,97',
      price: '499,99',
      promo: true,
      info: 'à vista no PIX'
    },
    { 
      id: 2, 
      productName: 'Headset Gamer Sem Fio Logitech G Astro A30, Drivers 40mm, Bluetooth, PS e PC, Azul Escuro',
      imageURL: '/logitech/image-1.png',
      previousPrice: '1.999,99',
      price: '1.499,99',
      promo: true,
      info: 'à vista no PIX'
    },
    { 
      id: 3, 
      productName: 'Caixa de som Logitech G560 com RGB LIGHTSYNC, Sistema 2.1 e Conexão Bluetooth, USB ou 3,5mm',
      imageURL: '/logitech/image-3.png',
      previousPrice: '1.777,77',
      price: '999,99',
      promo: true,
      info: 'à vista no PIX'
    },
    { 
      id: 4, 
      productName: 'Placa de Vídeo RX 6600 CLD 8G ASRock AMD Radeon, 8GB, GDDR6',
      imageURL: '/image.png',
      previousPrice: '12.267,47',
      price: '1.349,99',
      info: 'com 20% de desconto no PIX',
      promo: false,
    },
    { 
      id: 5, 
      productName: 'Placa de Vídeo RX 6750XT Gaming XFX Graphics Card AMD Radeon, 12GB GDDR6, Ray tracing, Fidelity FX',
      imageURL: '/image-1.png',
      previousPrice: '4.229,29',
      price: '2.999,99',
      info: 'com 20% de desconto no PIX',
      promo: false,
    },
    { 
      id: 6, 
      productName: 'Placa de Vídeo RTX 4060 AERO OC Gigabyte NVIDIA GeForce, 8GB GDDR6, RGB, DLSS, Ray Tracing, Branco',
      imageURL: '/image-2.png',
      previousPrice: '3.599,99',
      price: '2.499,99',
      info: 'com 20% de desconto no PIX',
      promo: false,
    },
    { 
      id: 7, 
      productName: 'Placa de Vídeo GTX 1650 D6 Ventus XS OCV3 MSI NVIDIA GeForce, 4GB GDDR6, G- Sync',
      imageURL: '/image-3.png',
      previousPrice: '947,36',
      price: '799,99',
      info: 'com 20% de desconto no PIX',
      promo: false,
    },
    { 
      id: 8, 
      productName: 'Placa de Vídeo Gigabyte Radeon RX 6600 EAGLE AMD, 8GB GDDR6, Preto',
      imageURL: '/image-4.png',
      previousPrice: '2.477,94',
      price: '1.399,99',
      info: 'com 20% de desconto no PIX',
      promo: false,
    },
    
  ]  

    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    if (id) {
      const product = data.find(item => item.id.toString() === id);
      if (product) {
        return Response.json(product);
      } else {
        return new Response('Produto não encontrado', { status: 404 });
      }
    }
  
    return Response.json(data);
}
