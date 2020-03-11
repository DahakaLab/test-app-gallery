<template>
  <div class="popup-receipt">
    <div class="popup-receipt__heading-container">
      <h3 class="popup-receipt__title">
        {{ title }}
      </h3>
      <div class="popup-receipt__heading-info">
        <span v-if="date">{{ date }}</span>
        <div class="popup-receipt__heading-locate">
          <LocateSVG />
          <span v-if="location">{{ location }}</span>
        </div>
      </div>
    </div>
    <div v-if="products" class="popup-receipt__content-container">
      <div class="popup-receipt__content-row popup-receipt__content-row--heading">
        <div class="popup-receipt__content-cell">
          Название продукта
        </div>
        <div class="popup-receipt__content-cell popup-receipt__content-cell--fixed">
          Кол-во
        </div>
        <div class="popup-receipt__content-cell popup-receipt__content-cell--fixed">
          Стоимость
        </div>
      </div>
      <div
        v-for="(product, index) in products"
        :key="`popup-receipt-container-${index}`"
        class="popup-receipt__content-row"
      >
        <div class="popup-receipt__content-cell">
          <span>{{ product.title }}</span>
        </div>
        <div class="popup-receipt__content-cell popup-receipt__content-cell--fixed">
          <span>{{ product.amount }}</span>
        </div>
        <div class="popup-receipt__content-cell popup-receipt__content-cell--fixed">
          <span>{{ product.price }}
            <span class="popup-receipt__content-cell-rubles"> ₽</span>
          </span>
        </div>
      </div>
    </div>
    <div v-if="pointsString" class="popup-receipt__total-container">
      <div class="popup-receipt__total">
        <span>Итого:
          <span class="popup-receipt__total-value"> {{ info.sum }}</span>
          <span class="popup-receipt__rubles"> ₽</span>
        </span>
      </div>
      <div :class="['popup-receipt__total-points', pointsModifier]">
        <span>{{ pointsString }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import { PopupReceiptInfo } from '~/types/base/popup';
// import { Product } from '~/types/io-ts/transaction';
import LocateSVG from '~/assets/svg/locate.svg';
// import Pluralize from '~/helpers/pluralize';

@Component({
  components: {
    LocateSVG,
  },
})
export default class PopupReceipt extends Vue {
  // get info(): PopupReceiptInfo | undefined {
  //   return this.$store.getters['popup/getInfo'];
  // }

  // get title(): string {
  //   if (this.info?.title) return this.info.title;
  //   return 'Кассовый чек';
  // }

  // get date(): string | undefined {
  //   if (this.info?.date) return this.$moment(this.info?.date).format('LLL');
  //   return undefined;
  // }

  // get location(): string | undefined {
  //   return this.info?.location;
  // }

  // get products(): Product | undefined {
  //   return this.info?.products;
  // }

  // get points(): number | undefined {
  //   const pointsAdd = this.info?.points.add;
  //   const pointsSub = this.info?.points.sub;
  //   if (typeof pointsAdd === 'number' && typeof poi
  // ntsSub === 'number') return pointsAdd - pointsSub;
  //   return undefined;
  // }

  // get isPointNegative(): boolean {
  //   return (this.points !== undefined && this.points < 0);
  // }

  // get pointsModifier(): string {
  //   return this.isPointNegative ? 'popup-receipt__total-points--negative' : '';
  // }

  // get pointsString(): string | undefined {
  //   if (this.points) {
  //     const pointsText = Pluralize.pluralizePhrase(this.points, ['балл', 'балла', 'баллов']);
  //     return this.isPointNegative ? pointsText : `+${pointsText}`;
  //   }
  //   return undefined;
  // }
}
</script>

<style lang="scss">
.popup-receipt {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  height: auto;
  $parent: &;

  &__heading-container {
    padding: 30px 30px 15px;
    border-bottom: 1px solid $grayBitLighter;
  }

  &__title {
    font-size: 24px;
    font-weight: 400;
    margin-right: 15px;
    margin-bottom: 15px;
  }

  &__heading-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: $gray;

    span + #{$parent}__heading-locate {
      margin-top: 10px;
    }
  }

  &__heading-locate {
    display: flex;
    align-items: center;

    svg {
      width: 22px;
      height: 22px;
      fill: $gray;
      margin-right: 10px;
    }
  }

  &__content-container {
    padding: 15px 0;
    border-bottom: 1px solid $grayBitLighter;
  }

  &__content-row {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    padding: 15px 30px;
    width: 100%;

    &--heading {
      display: none;
    }
  }

  &__content-cell {
    display: flex;
    align-items: flex-end;
    margin-bottom: 15px;
    width: 100%;
    flex: 1 1 100%;

    &--fixed {
      justify-content: center;
      margin-bottom: 0;
      width: 75px;
      flex: 0 0 75px;
    }
  }

  &__rubles {
    color: $gray;
  }

  &__total-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    width: 100%;
    font-size: 18px;
  }

  &__total {
    display: flex;
    align-items: flex-end;
  }

  &__total-value {
    font-size: 24px;
  }

  &__total-points {
    color: $active;

    &--negative {
      color: $redhead;
    }
  }

  @media (min-width: $screenTablet) {
    &__heading-info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      span + #{$parent}__heading-locate {
        margin-left: 10px;
        margin-top: 0;
      }
    }

    &__content-container {
      min-height: 400px;
    }

    &__content-row {
      flex-wrap: nowrap;
      margin-bottom: 0;

      &--heading {
        display: flex;
        color: $gray;
      }
    }

    &__content-cell {
      margin-bottom: 0;

      &--fixed {
        width: 100px;
        flex: 0 0 100px;
      }
    }
  }
}
</style>
