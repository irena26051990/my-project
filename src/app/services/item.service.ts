import { Injectable } from "@angular/core";
import { Item } from "../models/item.model";

@Injectable()
export class ItemService {

    items: Item[] = [
        new Item("ФІСКАЛЬНИЙ РЕЄСТРАТОР МАРИЯ 304Т3 З КСЕФ", "Desc", 300, "assets/1.jpg"),
        new Item("ФІСКАЛЬНИЙ РЕЄСТРАТОР МІНІ-ФП54.01", "Desc", 300, "assets/2.jpg"),
        new Item("ФІСКАЛЬНИЙ РЕЄСТРАТОР ЕКСЕЛЛІО FPP-350", "Desc", 300, "assets/3.jpg"),
        new Item("КАСОВИЙ АПАРАТ MINI-T 400 ME З МОДЕМОМ", "Desc", 300, "assets/4.png"),
        new Item("КАСОВИЙ АПАРАТ IKC-M510", "Desc", 300, "assets/5.png"),
        new Item("ВАГА З ДРУКОМ ЕТИКЕТОК ШТРИХ-ПРИНТ", "Desc", 300, "assets/6.jpg"),
        new Item("ВАГИ CAS SWII", "Desc", 300, "assets/7.jpg"),
        new Item("ВАГИ DIGI SM-300", "Desc", 300, "assets/8.jpg"),
        new Item("СКАНЕР ШТРИХ-КОДУ SYMBOL LS2208 (MOTOROLA)", "Desc", 300, "assets/9.jpg"),
        new Item("ЛІЧИЛЬНИК БАНКНОТ MAGNER 150 DIGITAL", "Desc", 300, "assets/10.jpg"),
        new Item("DORS 60", "Desc", 300, "assets/11.jpg")
        ]

    getAllItems() {
        return this.items;
    }
}