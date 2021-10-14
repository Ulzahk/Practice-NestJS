import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDTO, UpdateBrandDTO } from 'src/dtos/brand.dtos';
import { Brand } from 'src/entities/brand.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: '7a2f9945-f50b-400b-803d-1aea328a2c3d',
      name: 'samsung',
      image:
        'https://images.pexels.com/photos/48605/pexels-photo-48605.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
  ];

  findAll() {
    return this.brands;
  }
  findOne(id: string) {
    const brand = this.brands.filter((item) => item.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return brand;
  }
  create(payload: CreateBrandDTO) {
    const newBrand = {
      id: uuidv4(),
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }
  update(id: string, payload: UpdateBrandDTO) {
    const brand = this.findOne(id);
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    if (brand) {
      const brandIndex = this.brands.findIndex((item) => item.id === id);
      this.brands[brandIndex] = { ...brand, ...payload };
      return this.brands[brandIndex];
    }
    return null;
  }
  delete(id: string) {
    const brandIndex = this.brands.findIndex((item) => item.id === id);
    if (brandIndex === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.brands.splice(brandIndex, 1);
    return {
      message: `Brand: ${id} deleted`,
    };
  }
}
